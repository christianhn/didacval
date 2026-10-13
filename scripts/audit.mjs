/**
 * Comprobaciones automáticas de las subpáginas (fase 6 del brief).
 *
 *   node scripts/audit.mjs                       # todas las páginas de `PAGES`
 *   BASE=http://localhost:4321 node scripts/audit.mjs
 *   SHOTS=/screenshots node scripts/audit.mjs    # además, capturas de página completa
 *
 * Sale con código 1 si alguna comprobación falla, para poder encadenarlo en un
 * bucle: `node scripts/audit.mjs || node scripts/audit.mjs`.
 *
 * La lista de iconos no está aquí: se lee de `scripts/subset-icons.py`, que es la
 * única fuente de verdad. Un icono que no esté en la fuente recortada se pinta
 * como texto (es el bug de `compass`), y este script lo detecta antes de que llegue
 * a una captura.
 */
import { readFileSync, mkdirSync } from "node:fs";
import { chromium } from "playwright";

const BASE = process.env.BASE ?? "http://localhost:4321";
const WIDTHS = (process.env.WIDTHS ?? "1440,390").split(",").map(Number);
const PAGES = (
  process.env.PAGES ??
  "/,/terapia-familiar-zaragoza/,/psicologo-ansiedad-zaragoza/,/sexologo-zaragoza/,/terapia-adultos-zaragoza/,/quien-soy/,/contacto/"
).split(",");
const SHOTS = process.env.SHOTS ?? null;
const MAX_BLOCKS = 6;

/** Iconos que la fuente recortada cubre, leídos de subset-icons.py. */
function subsetIcons() {
  const src = readFileSync(new URL("./subset-icons.py", import.meta.url), "utf8");
  const block = src.match(/ICONS = """([\s\S]*?)"""/);
  if (!block) throw new Error("No se encontró la lista ICONS en subset-icons.py");
  return new Set(block[1].split(/\s+/).filter(Boolean));
}

const ICONS = subsetIcons();

/** Acrónimos que sí son texto en mayúsculas y no un icono sin renderizar. */
const ALLOWED_UPPER = new Set(["TDAH", "TLP", "IMC", "SIDA"]);

async function inspect(page) {
  return page.evaluate(() => {
    const px = (el, prop) => getComputedStyle(el)[prop];

    const sections = [...document.querySelectorAll("main > section")];

    const h2s = [...document.querySelectorAll("main h2")].map((el) => ({
      text: el.textContent.trim().slice(0, 44),
      fontSize: px(el, "fontSize"),
      fontWeight: px(el, "fontWeight"),
    }));

    const blocks = sections.map((el) => ({
      id: el.id || el.className.toString().split(" ")[0],
      classes: el.className.toString(),
      background: px(el, "backgroundColor"),
      paddingTop: px(el, "paddingTop"),
      paddingBottom: px(el, "paddingBottom"),
      height: +el.getBoundingClientRect().height.toFixed(0),
    }));

    const leafText = [...document.querySelectorAll("main *")]
      .filter((el) => el.children.length === 0)
      .map((el) => (el.textContent || "").trim());

    const iconNames = [
      ...new Set(
        [...document.querySelectorAll(".material-symbols-outlined")].map((el) =>
          (el.textContent || "").trim(),
        ),
      ),
    ];

    const imgs = [...document.querySelectorAll("main img")].map(
      (el) => el.currentSrc || el.src,
    );

    // Viñetas sueltas: una rejilla de N columnas con N+1 elementos deja la
    // última huérfana en la fila de arriba.
    const orphanBullets = [...document.querySelectorAll("main ul, main ol")]
      .map((list) => {
        const cols = px(list, "gridTemplateColumns").split(" ").length;
        const n = list.children.length;
        return cols > 1 && n % cols === 1 && cols > 1
          ? { cols, items: n, text: (list.textContent || "").trim().slice(0, 40) }
          : null;
      })
      .filter(Boolean);

    return {
      h1Count: document.querySelectorAll("main h1, main").length
        ? document.querySelectorAll("h1").length
        : 0,
      h1: [...document.querySelectorAll("h1")].map((el) =>
        el.textContent.trim().slice(0, 50),
      ),
      h2s,
      blocks,
      sectionCount: sections.length,
      uppercase: [
        ...new Set(
          leafText.filter(
            (t) => /^[A-Z][A-Z0-9_]{3,}$/.test(t) && t.length < 30,
          ),
        ),
      ],
      iconNames,
      imgs,
      repeatedImgs: imgs.filter((src, i) => imgs.indexOf(src) !== i),
      orphanBullets,
      scrollW: document.documentElement.scrollWidth,
      clientW: document.documentElement.clientWidth,
    };
  });
}

function check(name, failures, hint, { advisory = false } = {}) {
  const ok = failures.length === 0;
  const mark = advisory ? (ok ? "·" : "i") : ok ? "✓" : "✗";
  console.log(`  ${mark} ${name}${advisory ? "  (informativo)" : ""}`);
  if (!ok) for (const f of failures) console.log(`      ${f}`);
  if (!ok && hint && !advisory) console.log(`      → ${hint}`);
  return ok;
}

/**
 * La landing es la referencia, no una página del sistema: se mide y se capturan
 * las reglas que también le aplican (H1 único, sin scroll horizontal, iconos),
 * pero la homogeneidad de H2 y de padding se le informa sin fallar: la landing
 * tiene 4 tamaños de H2 y 6 de padding, y ése es justo el problema que viene a
 * corregir la escala cerrada.
 */
const LANDING_ADVISORY = (pathname) => pathname === "/";

/**
 * Todas las secciones de una subpágina comparten el `padding-block` de la
 * escala… con una excepción, y la excepción es intencionada: el contenedor beige
 * redondeado (`.rows`) no es una sección sino un panel retranqueado 48px a cada
 * lado, y su aire interior es el de la landing (72/48 en escritorio, 48/32 en
 * móvil). Se mide aparte para que quede a la vista en vez de esconderlo en la
 * media.
 */
function uniformPadding(d) {
  const isPanel = (b) => /(^|\s)rows(\s|$)/.test(b.classes);
  const panel = d.blocks.filter(isPanel);
  const sections = d.blocks.filter((b) => !isPanel(b));
  const values = [...new Set(sections.map((b) => `${b.paddingTop}/${b.paddingBottom}`))];

  const failures = [];
  if (values.length > 1) {
    failures.push(`valores: ${values.join(", ")}`);
    for (const b of sections)
      failures.push(
        `    ${b.paddingTop}/${b.paddingBottom} · ${b.background} · ${b.id} (h ${b.height})`,
      );
  }
  return { failures, panel };
}

async function main() {
  const browser = await chromium.launch();
  let failed = 0;

  for (const pathname of PAGES) {
    for (const width of WIDTHS) {
      console.log(`\n${pathname}  @${width}`);
      const context = await browser.newContext({ viewport: { width, height: 900 } });
      const page = await context.newPage();
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.goto(BASE + pathname, { waitUntil: "networkidle" });
      await page.waitForTimeout(250);
      const d = await inspect(page);

      if (SHOTS) {
        mkdirSync(SHOTS, { recursive: true });
        const name = pathname === "/" ? "landing" : pathname.replace(/\//g, "-").replace(/^-|-$/g, "");
        await page.screenshot({
          path: `${SHOTS}/${name}-${width}.png`,
          fullPage: true,
        });
      }

      const results = [
        check(
          "un único H1",
          d.h1Count === 1 ? [] : [`hay ${d.h1Count}`],
          undefined,
          { advisory: pathname === "/" },
        ),
        check(
          "todos los H2 con el mismo font-size",
          [...new Set(d.h2s.map((h) => h.fontSize))].length <= 1
            ? []
            : [
                `tamaños: ${[...new Set(d.h2s.map((h) => h.fontSize))].join(", ")}`,
                ...d.h2s.map((h) => `    ${h.fontSize} · ${h.text}`),
              ],
          "todos los H2 llevan el rol `type-h2` de _scale.scss",
          { advisory: LANDING_ADVISORY(pathname) },
        ),
        (() => {
          const { failures, panel } = uniformPadding(d);
          check(
            "todas las secciones con el mismo padding-block",
            failures,
            "todas usan el mixin `section-block`",
            { advisory: LANDING_ADVISORY(pathname) },
          );
          // El panel se informa aparte: es la excepción documentada, y wanta a
          // la vista en cada pasada en vez de quedar escondida en el filtro.
          for (const b of panel)
            console.log(
              `      panel  ${b.paddingTop}/${b.paddingBottom} · ${b.background} · ${b.id} (h ${b.height})`,
            );
        })(),
        check("sin scroll horizontal", d.scrollW <= d.clientW ? [] : [`${d.scrollW} > ${d.clientW}`]),
        check(
          "sin iconos sin renderizar",
          [
            ...d.iconNames.filter((n) => !ICONS.has(n)),
            ...d.uppercase.filter((t) => !ALLOWED_UPPER.has(t)),
          ].length === 0
            ? []
            : [
                `fuera de la fuente recortada: ${d.iconNames.filter((n) => !ICONS.has(n)).join(", ") || "—"}`,
                `mayúsculas sospechosas: ${d.uppercase.filter((t) => !ALLOWED_UPPER.has(t)).join(", ") || "—"}`,
              ],
          "el nombre debe estar en la lista ICONS de scripts/subset-icons.py",
        ),
        check(
          "ninguna imagen repetida en la página",
          d.repeatedImgs.length === 0
            ? []
            : d.repeatedImgs.map(
                (s) =>
                  `repetida: ${decodeURIComponent(s).match(/assets%2F(.+?)%3ForigWidth/) ? decodeURIComponent(s).match(/assets%2F(.+?)%3ForigWidth/)[1] : s.slice(-40)}`,
              ),
          "cada sección con imagen necesita su propia foto",
        ),
        check(
          `máximo ${MAX_BLOCKS} bloques`,
          d.sectionCount <= MAX_BLOCKS ? [] : [`hay ${d.sectionCount}`],
          undefined,
          { advisory: LANDING_ADVISORY(pathname) },
        ),
        check(
          "sin viñetas huérfanas en rejilla",
          d.orphanBullets.length === 0
            ? []
            : d.orphanBullets.map((o) => `${o.items} elementos en ${o.cols} columnas`),
          "una rejilla de N columnas necesita múltiplos de N elementos",
        ),
      ];

      if (results.includes(false)) failed++;
      await context.close();
    }
  }

  await browser.close();
  console.log(
    failed === 0 ? "\nTodo correcto." : `\n${failed} combinación(es) con fallos.`,
  );
  process.exit(failed === 0 ? 0 : 1);
}

main();
