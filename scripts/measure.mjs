/**
 * Volca a JSON los valores medidos de una página con `getComputedStyle` y
 * `getBoundingClientRect`. Es la fuente de DESIGN_SPEC.md: si cambia un valor de
 * la landing, se vuelve a ejecutar y se ve qué se ha movido.
 *
 *   node scripts/measure.mjs                     # landing, 1440 + 390
 *   BASE=http://localhost:4321 PATHNAME=/terapia-familiar-zaragoza/ \
 *     OUT=/tmp/familiar.json node scripts/measure.mjs
 *
 * Requiere Playwright (`npx playwright install chromium` la primera vez).
 * Con `MOTION=1` se mide con las animaciones de GSAP en vez de desactivadas.
 */
import { writeFileSync } from "node:fs";
import { chromium } from "playwright";

const BASE = process.env.BASE ?? "http://localhost:4321";
const PATHNAME = process.env.PATHNAME ?? "/";
const OUT = process.env.OUT ?? "measure.json";
const WIDTHS = (process.env.WIDTHS ?? "1440,390").split(",").map(Number);

const TYPO_PROPS = [
  "fontFamily",
  "fontSize",
  "fontWeight",
  "lineHeight",
  "letterSpacing",
  "color",
  "textTransform",
];

const BOX_PROPS = [
  "backgroundColor",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "marginLeft",
  "marginRight",
  "borderRadius",
  "borderTopWidth",
  "borderTopStyle",
  "borderTopColor",
  "borderBottomWidth",
  "borderBottomStyle",
  "borderBottomColor",
  "display",
  "gridTemplateColumns",
  "gap",
  "rowGap",
  "maxWidth",
  "minHeight",
  "aspectRatio",
];

/** Selectores a medir, por etiqueta. Los que no existen salen como `null`. */
const TYPOGRAPHY = [
  ["H1", ".hero-video__title-main"],
  ["Kicker de hero", ".hero-video__eyebrow"],
  ["H2 Especialidades", "#areas-clinicas .specialties__title"],
  ["Kicker de sección", "#areas-clinicas .specialties__eyebrow"],
  ["Descripción de cabecera", "#areas-clinicas .specialties__desc"],
  ["Enlace de cabecera", "#areas-clinicas .specialties__header-cta"],
  ["H2 Tres situaciones", "#mas-informacion .details__title"],
  ["H3 de fila", ".detail-row__title"],
  ["Kicker de fila", ".detail-row__kicker"],
  ["Subtítulo de fila", ".detail-row__subtitle"],
  ["Viñeta de fila", ".detail-row__bullets li"],
  ["H2 Proceso", "#proceso .process__title"],
  ["Número de tarjeta", ".process__step-number"],
  ["H3 de tarjeta", ".process__step-heading-title"],
  ["Cuerpo de tarjeta", ".process__step-heading-desc"],
  ["H2 Perfil", "#sobre-mi .profile__title"],
  ["Cuerpo de Perfil", "#sobre-mi .profile__desc"],
  ["H2 Contacto", "#contacto-cita .contact__title"],
  ["H2 FAQ", ".faq__title"],
  ["H3 de FAQ", ".faq__question h3"],
  ["Respuesta de FAQ", ".faq__answer p"],
  ["Texto de botón", ".cta__line"],
];

const LAYOUT = [
  ["Contenedor de hero", ".hero-video__content"],
  ["Contenedor de Especialidades", "#areas-clinicas .specialties__inner"],
  ["Cabecera de sección", "#areas-clinicas .specialties__header"],
  ["Bloque kicker+H2+desc", "#areas-clinicas .specialties__heading"],
  ["Rejilla de Especialidades", "#areas-clinicas .specialties__grid"],
  ["Panel beige", "#mas-informacion"],
  ["Cabecera del panel", "#mas-informacion .details__header"],
  ["Lista de filas", "#mas-informacion .details__list"],
  ["Fila", ".detail-row"],
  ["Rejilla del proceso", "#proceso .process__container"],
  ["Pila de tarjetas", "#proceso .process__stack"],
  ["Tarjeta", ".process__step"],
  ["Rejilla de FAQ", ".faq__inner"],
  ["Columna de imagen de FAQ", ".faq__intro"],
  ["Ítem de FAQ", ".faq__item"],
  ["Rejilla de Perfil", "#sobre-mi .profile__inner"],
  ["Rejilla de Contacto", "#contacto-cita .contact__inner"],
  ["Rejilla del formulario", "#contacto-cita .contact__grid"],
  ["Píldora del botón", ".cta__label"],
  ["Círculo de flecha", ".cta__icon"],
];

async function main() {
  const browser = await chromium.launch();
  const out = {};

  for (const width of WIDTHS) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
    });
    const page = await context.newPage();
    // Sin movimiento el sitio no parte el titular en letras ni oculta el hero:
    // lo que se mide es la maquila en reposo, no un fotograma de animación.
    if (process.env.MOTION !== "1")
      await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(BASE + PATHNAME, { waitUntil: "networkidle" });
    await page.waitForTimeout(300);

    out[width] = await page.evaluate(
      ({ TYPO_PROPS, BOX_PROPS, TYPOGRAPHY, LAYOUT }) => {
        const typo = (sel) => {
          const el = document.querySelector(sel);
          if (!el) return null;
          const cs = getComputedStyle(el);
          const r = el.getBoundingClientRect();
          const entry = { selector: sel };
          for (const p of TYPO_PROPS) entry[p] = cs[p];
          entry.rect = { w: +r.width.toFixed(2), h: +r.height.toFixed(2) };
          entry.text = (el.textContent || "").trim().slice(0, 60);
          return entry;
        };

        const box = (sel) => {
          const el = document.querySelector(sel);
          if (!el) return null;
          const cs = getComputedStyle(el);
          const r = el.getBoundingClientRect();
          const entry = { selector: sel };
          for (const p of BOX_PROPS) entry[p] = cs[p];
          entry.rect = {
            w: +r.width.toFixed(2),
            h: +r.height.toFixed(2),
            x: +r.x.toFixed(2),
          };
          return entry;
        };

        return {
          typography: TYPOGRAPHY.map(([label, sel]) => ({
            label,
            ...(typo(sel) ?? { selector: sel }),
          })),
          layout: LAYOUT.map(([label, sel]) => ({
            label,
            ...(box(sel) ?? { selector: sel }),
          })),
          // Ritmo vertical: una línea por sección, en orden de pintado.
          sections: [...document.querySelectorAll("main > *")].map((el) => {
            const cs = getComputedStyle(el);
            return {
              id: el.id || el.className.toString().slice(0, 40),
              background: cs.backgroundColor,
              paddingTop: cs.paddingTop,
              paddingBottom: cs.paddingBottom,
              height: +el.getBoundingClientRect().height.toFixed(1),
            };
          }),
          gutters: [
            ".hero-video__content > *",
            ".specialties__heading",
            ".process__sidebar",
            ".faq__list",
            ".profile__media",
            ".contact__header",
          ].map((sel) => {
            const el = document.querySelector(sel);
            if (!el) return { sel, left: null };
            const r = el.getBoundingClientRect();
            return {
              sel,
              left: +r.left.toFixed(1),
              width: +r.width.toFixed(1),
              viewport: document.documentElement.clientWidth,
            };
          }),
        };
      },
      { TYPO_PROPS, BOX_PROPS, TYPOGRAPHY, LAYOUT },
    );

    await context.close();
  }

  await browser.close();
  writeFileSync(OUT, JSON.stringify(out, null, 2));
  console.log(`OK -> ${OUT}`);
}

main();
