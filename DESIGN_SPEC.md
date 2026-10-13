# DESIGN_SPEC — Sistema de composición de las subpáginas

Medido con Playwright (Chromium 156, `prefers-reduced-motion: reduce` para leer la
maquila en reposo) sobre `http://localhost:4322/`, a **1440 px** y **390 px** de ancho.
Valores en `getComputedStyle` + `getBoundingClientRect`. Ninguna cifra de este
documento es inventada: todas salen de la medición o de un mixin SCSS ya existente
del proyecto.

Reproducir: `scripts/measure.mjs` (volcado JSON) y `scripts/audit.mjs` (inventario).

---

## 1. Tipografía

Familia única: **Hanken Grotesk** (variable, pesos 300–600) en todo el sitio.

### 1.1 Escala cerrada — 5 roles, ningún tamaño fuera de la escala

| # | Rol | Mixin existente | 1440 px | 390 px | Peso | line-height | letter-spacing | Color |
|---|-----|-----------------|---------|--------|------|--------------|-----------------|-------|
| 1 | **display** (H1) | `text-display-hero` | 64 px | 44.8 px | 500 | 60 px / 42 px (0.94) | -1.92 px / -1.12 px (-0.03em) | `#191c1a` (hero) · `#fff` (sobre foto) |
| 2 | **H2** (todos los H2 de todas las páginas) | `text-headline-xl` | 55 px | 30 px | 500 | 50 px (0.91) / 36 px (1.2) | -2 px (-0.125rem) / -0.6 px | `#191c1a` |
| 3 | **H3** (fila, tarjeta, pregunta) | `text-headline-sm` → `text-headline-lg` | 32 px | 22 px | 500 | 38 px / 28 px | -0.64 px / -0.33 px | `#191c1a` |
| 4 | **cuerpo** (párrafo, viñeta, descripción de cabecera) | `text-body-lg` | 16 px | 16 px | 400 | 26 px (1.625) | -0.005em | `#444845` |
| 5a | **pequeño** (nota al pie, etiqueta de enlace) | `text-body-sm` | 13 px | 13 px | 400 | 19 px | 0.005em | `#444845` |
| 5b | **kicker** (etiqueta en mayúsculas) | `eyebrow()` | 10 px | 10 px | 600 | 12 px | 1 px (0.1em) | `#44694a` |

Los cinco roles son **mixins que ya existen** en `src/styles/_typography.scss`. No se
introduce ni un tamaño nuevo. La fila 5 es un único rol "pequeño" con dos
tratamientos ópticos: 10 px en mayúsculas para la etiqueta, 13 px para la nota.

**Regla dura:** un H1 y un H3 no son estilos nuevos. El H1 de las subpáginas usa el
rol *display* (64 px), que es **mayor** que el H2 de la landing (55 px). Ningún H2
de una página puede ser más pequeño que 55 px / 30 px, ni siquiera un CTA.

### 1.2 Medición de la landing (valores de referencia)

| Elemento | 1440 px | 390 px | Peso | l-h | ls | Color |
|----------|---------|--------|------|-----|-----|-------|
| H1 hero (`text-display-hero`) | 64 px | 44.8 px | 500 | 60 / 42 | -1.92 / -1.12 | `#fff` |
| Kicker hero | 11 px | 10 px | 400 | 11 | 2.42 | `rgba(255,255,255,.82)` |
| H2 Especialidades | 52 px | 32 px | **600** | 52 / 32 | -2.08 / -0.96 | `#191c1a` |
| H2 Tres situaciones | 55 px | 30 px | 500 | 50 / 36 | -2 | `#191c1a` |
| H2 Cómo será tu proceso | 41.6 px | 41.6 px | **800** | 45.76 | -1.248 | `#191c1a` |
| H2 Cuéntame qué te pasa | 55 px | 30 px | 500 | 50 / 36 | -2 | `#191c1a` |
| H2 Resuelvo tus dudas (FAQ) | 55 px | 30 px | 500 | 50 / 36 | -2 | `#fff` (sobre foto) |
| H2 Didac Val Capdevila | 128 px | 30 px | 500 | 113.92 | -6.4 | `#e2e2e2` (mix-blend) |
| H3 de fila (Tres situaciones) | 32 px | 22 px | 500 | 38 / 28 | -0.64 / -0.33 | `#191c1a` |
| H3 de tarjeta de proceso | 24 px | 24 px | 700 | 23 | -0.48 | `#191c1a` |
| H3 de pregunta FAQ | 17 px | 17 px | 500 | 28 | -0.255 | `#191c1a` |
| Kicker de sección | 10 px | 10 px | 600 | 12 | 1 | `#44694a` |
| Descripción de cabecera | 15 px | 13 px | 400 | 23 | — | `#444845` |
| Descripción de proceso | 16.8 px | 16.8 px | 400 | 26.88 | — | `#444845` |
| Viñeta de fila | 15 px | 15 px | 400 | 23 | — | `#444845` |
| Subtítulo de fila | 16 px | 16 px | 500 | 26 | -0.08 | `#191c1a` |
| Enlace de cabecera de sección | 13 px | 13 px | 600 | 23 | — | `#191c1a` |
| Texto de botón (CTA) | 15 px | 15 px | 500 | 18.2 | — | `#fff` |
| Respuesta FAQ | 15 px | 15 px | 300 | 25.5 | — | `#444845` |

Lectura: la landing **no es internamente homogénea** (H2 de 52 / 55 / 41.6 px,
peso 600 / 500 / 800; cuerpo de 15 / 16 / 16.8 px). La escala cerrada de arriba
elige el valor de cada rol; es el motivo por el que las subpáginas, que sí son
homogéneas pero con otros valores, se veían como hechas por otra persona.

Decisiones que se someten a aprobación:
- El H2 de subpágina se fija en **55 px** (`text-headline-xl`), no en los 52 px de
  "Especialidades" ni en los 41.6 px de "Cómo será tu proceso". Es el valor de la
  sección de referencia "Tres situaciones" y el que usan Contacto y FAQ.
- El cuerpo se fija en **16 px**, no en 13/15 px. "Nada de gris claro y pequeño":
  `#444845` sobre `#f1efe9` da 7.2:1; a 13 px sólo daba 5.9:1 con un tamaño que se
  leía como nota al pie.
- El H3 se fija en **32 px** (el de las filas de "Tres situaciones"), no en los
  24 px de las tarjetas de proceso ni en los 17 px de las preguntas de FAQ.

---

## 2. Layout

| Concepto | 1440 px | 390 px | Origen |
|----------|---------|--------|--------|
| Ancho máximo de contenedor | 90 rem (1440 px) | 90 rem | `$container-max` |
| Ancho de contenido a 1440 px | 1376 px | — | medido |
| Margen lateral (gutter) | 2 rem (32 px) | 1.25 rem (20 px) | `$gutter-desktop` / `$gutter-mobile` |
| `gap` cabecera de sección → contenido | 3 rem (48 px) | 2 rem (32 px) | medido (details 48 / specialties 32) |
| `gap` rejilla Especialidades | 1.25 rem (20 px) | 1 rem (16 px) | medido |
| Columnas: Proceso | `380px 1fr`, gap 5 rem (80 px) | 1 col, gap 4.5 rem (72 px) | medido |
| Columnas: FAQ | `4fr 8fr`, gap 3 rem (48 px) | 1 col, gap 3 rem | medido |
| Columnas: Perfil / SplitImage | `7fr 7fr` (50/50), gap 4.5 rem (72 px) | 1 col, gap 2 rem (32 px) | medido |
| Columnas: Formulario | `976px 376px`, gap 1.5 rem (24 px) | 1 col, gap 2 rem | medido |
| Columnas: Cabecera de Contacto | `817px 511px`, gap 3 rem | 1 col | medido |

Cierre de texto: párrafo de cuerpo `max-width: 34 rem` (≈ 3 líneas a 1440 px);
descripción de cabecera de sección `max-width: 34 rem`.

---

## 3. Ritmo vertical — 2 valores, ningún otro

| Valor | Escritorio | Móvil | Uso |
|-------|-----------|-------|-----|
| **$section-pad-desktop** | **6.5 rem (104 px)** | — | `padding-block` de **todas** las secciones de subpágina |
| **$section-pad-mobile** | — | **4.5 rem (72 px)** | ídem |

104 px es el `padding-block` de las tres secciones de la landing que lo repiten
(Perfil, FAQ, Contacto). 72 px es el de Perfil en móvil.

`padding-block` medido hoy en las subpáginas (por qué falla el sistema actual):

| Sección | Actual 1440 | Actual 390 |
|---------|--------------|------------|
| PageHero | 24 / 72 | 24 / 48 |
| intro (TextSection) | 104 / 104 | 72 / 72 |
| rows panel | 72 / 48 | 48 / 32 |
| split | 104 / 104 | 72 / 72 |
| faq (plain) | 104 / 104 | 72 / 72 |
| cta-band | 72 / 72 | 48 / 48 |

Nueve valores distintos. La escala los deja en dos.

---

## 4. Superficies

Orden de fondos en la landing (medido):

| # | Sección | Fondo |
|---|---------|-------|
| 1 | Hero vídeo | `#0a0b0a` |
| 2 | NoticeBar | `#f1f2ee` |
| 3 | Perfil | `#faf9f6` (`--color-surface`) |
| 4 | Especialidades | `#f1efe9` (`--color-surface-bone`) |
| 5 | Tres situaciones (panel) | `#dedcd5` (`--color-surface-bone-dark`) |
| 6 | Proceso | `#faf9f6` |
| 7 | FAQ | `#f1efe9` |
| 8 | Contacto | `#dedcd5` |

### Tokens de superficie para subpáginas

| Token | Color | Cuándo |
|-------|-------|--------|
| `base` | `#f1efe9` (`--color-surface-bone`) | secciones de contenido |
| `soft` | `#faf9f6` (`--color-surface`) | secciones de contenido, alternando con `base` |
| `panel` | `#dedcd5` (`--color-surface-bone-dark`) | **una sola vez por página**: el RowsContainer |
| `contact` | `#dedcd5` | lo pone `Contact.astro`, no se toca |

**Regla:** `base → panel → soft → base → soft → contact`, alternando siempre. El
`panel` redondeado aparece **una vez** y el contacto lo pone el componente global.

Nota de orden: en la landing, "Especialidades" (`base`) va seguido del panel
" Tres situaciones", y el espacio a los lados del panel es el propio fondo `base`
del body. Es decir, **hero `base` + panel `base`** es el patrón de la landing, no
una repetición. Se conserva.

### Contenedor beige redondeado ("Tres situaciones")

| Propiedad | 1440 px | 390 px |
|-----------|---------|--------|
| `margin-inline` | 3 rem (48 px) | 1.25 rem (20 px) |
| `border-radius` | 1.5 rem (24 px) | 24 px |
| `background` | `#dedcd5` | `#dedcd5` |
| `border-top` | 1 px **sólido** `#e2e0d9` | 1 px sólido |
| `padding-block` | 4.5 rem / 3 rem (72 / 48 px) | 3 rem / 2 rem (48 / 32 px) |
| `padding-inline` del contenido | 2 rem | 1.25 rem |
| `gap` interno cabecera → lista | 3 rem (48 px) | 2 rem (32 px) |

### Filas (`.detail-row`)

| Propiedad | 1440 px | 390 px |
|-----------|---------|--------|
| Columnas | `3.5rem  1fr  1.15fr` | 1 columna |
| `gap` | 2 rem (32 px) | 1 rem (16 px) |
| `padding-block` | 2 rem (32 px) | 1.5 rem (24 px) |
| `border-top` | **1 px `dashed` `#c4c7c4`** | 1 px dashed |
| Cierre de la lista (`border-bottom`) | 1 px `dashed` `#c4c7c4` | 1 px dashed |
| Altura real de una fila | **176 px** | 315 px |
| Icono | caja circular 3.5 rem, borde 1 px `#c4c7c4`, glifo 1.375 rem `#4d6357` | oculto |
| `align-items` | `center` | `start` |

Las líneas finas son **`dashed`**, no `solid`: es lo que usa la landing y lo que
distingue el patrón de filas del de tarjetas.

---

## 5. Recetas de bloque (constantes de componente)

Fuera de la escala tipográfica y de espaciado, pero **medidas también**: tamaño de
número de tarjeta, círculo de flecha, radios. Son parte del componente, no del texto.

### NumberedSteps (patrón "Cómo será tu proceso")

| Propiedad | 1440 px | 390 px |
|-----------|---------|--------|
| Rejilla | `380px 1fr`, gap 5 rem (80 px) | 1 col, gap 4.5 rem (72 px) |
| `padding-block` de sección | 6.5 rem (104 px) | 4.5 rem (72 px) |
| Tarjeta: `padding` | 2 rem (32 px) | 2 rem |
| Tarjeta: `border-radius` | 1.25 rem (20 px) | 20 px |
| Tarjeta: `background` | `#ffffff` | `#ffffff` |
| Tarjeta: sombra | `0 10px 30px -5px rgba(0,0,0,.04), 0 2px 6px -1px rgba(0,0,0,.02)` | igual |
| `gap` entre tarjetas | 2 rem (32 px) | 1.5 rem (24 px) |
| Número "01" | 41.6 px, w800, l-h 1, ls -1.664 px, `#6a9869`, `min-width` 2.75 rem | igual |
| Kicker de tarjeta | 11.2 px, w700, ls 0.896 px, `#4d6357` | igual |
| H3 de tarjeta | 24 px, w700, ls -0.48 px → **se sustituye por el rol H3 (32 px)** | 22 px |
| Cuerpo de tarjeta | 15.6 px, w400, l-h 1.65 → **se sustituye por el rol cuerpo (16 px)** | 16 px |
| `gap` número ↔ texto | 1.5 rem (24 px) | 24 px |

Los H3 de tarjeta se suben al rol H3 de la escala (32 px) para que el bloque
`Steps` tenga el mismo peso visual que `RowsContainer`, que va justo encima.

### SplitImage

| Propiedad | 1440 px | 390 px |
|-----------|---------|--------|
| Rejilla | `1fr 1fr`, gap 4.5 rem (72 px) | 1 col, gap 2 rem (32 px) |
| Radio de la imagen | 0.75 rem (12 px) — el de las tarjetas de especialidad de la landing | 12 px |
| `aspect-ratio` de la imagen | 5 / 4 | 4 / 3 |
| `max-width` del párrafo | 34 rem | 34 rem |

### FAQ (idéntico a la landing)

Rejilla `4fr 8fr`, gap 3 rem, imagen con `min-height` 40 rem y radio 0.5 rem, lista
`sticky`, `gap` 8 px entre ítems, ítem con `padding` 1.5 rem y radio 0.5 rem,
ancho de contenedor 90 rem. Se elimina la variante `plain` de las subpáginas
(centrada y con `max-width: 52 rem`).

### Botones (`ArrowButton`, no se toca)

| Propiedad | Valor |
|-----------|-------|
| Alto de la píldora | 2.75 rem (44 px) |
| `padding-inline` | 1.5 rem (24 px) |
| `border-radius` | `9999.01px` (full) |
| Círculo de flecha | 2.75 × 2.75 rem (44 px), radio full |
| `gap` rótulo ↔ círculo | 0.75 rem (12 px) |
| Texto | 15 px, w500, `#fff` |

---

## 6. Estado actual ("antes") — auditoría de las subpáginas

Medido con `scripts/audit.mjs` a 1440 px.

| Comprobación | Resultado |
|---|---|
| H2 con un solo tamaño por página | **Falla** en las 5 páginas: 55 px en el contenido y **32 px** en la banda de CTA y en el enlace al proceso |
| `padding-block` único por sección | **Falla**: 24/72 (hero), 72/48 (panel), 104/104 (texto, split, faq), 72/72 (CTA), 0 (bloques `full`) |
| Un único H1 | Correcto en las 6 |
| Sin scroll horizontal | Correcto en las 6 |
| Sin `src` de imagen repetida | **Falla** en familiar (`family.jpg` 2×) y ansiedad (`ansiedad.jpg` 2×) |
| Iconos renderizados | **Falla** en familiar: `compass` no está en la fuente recortada (sí `school`) → se pinta como texto |
| Viñeta huérfana | **Falla** en familiar: "Tres cosas, en este orden" pone 3 viñetas en una rejilla de 2 columnas → la 3ª queda sola |
| FAQ centrada y con otro ancho | **Falla** en las 4 páginas con FAQ: variante `plain`, `max-width: 52 rem`, sin imagen |
| Banda de CTA sobre el formulario | **Falla** en las 5: sección `cta-band` (`#dedcd5`, 236 px) pegada a `contacto-cita` (mismo fondo) |

Motivo del icono: `scripts/subset-icons.py` recorta la fuente de Material Symbols a
37 iconos y su lista **excludes `compass` y `clock` a propósito** (se dibujan como
SVG en `DetailIcon.astro`). `familiar.ts:137` usa `compass` dentro de un
`<span class="material-symbols-outlined">`, donde no hay SVG que lo sustituya.

---

## 7. Escala cerrada en SCSS

Un único archivo nuevo, `src/styles/_scale.scss`, que **envuelve mixins que ya
existen** — no redefine ningún valor tipográfico.

```scss
// Rol 1 — H1 / titular
@mixin type-display { @include text-display-hero; }        // 64 / 44.8

// Rol 2 — H2. Idéntico en todas las secciones y en todas las páginas.
@mixin type-h2 { @include text-headline-xl; }               // 55 / 30

// Rol 3 — H3 de fila, de tarjeta y de pregunta
@mixin type-h3 {
  @include text-headline-sm;                               // 22
  @media (min-width: $bp-lg) { @include text-headline-lg; } // 32
}

// Rol 4 — párrafo, viñeta, descripción de cabecera
@mixin type-body { @include text-body-lg; }                // 16 / 26

// Rol 5 — pequeño
@mixin type-small { @include text-body-sm; }               // 13 / 19
@mixin type-kicker { @include eyebrow(var(--color-eyebrow-accent)); } // 10 / 600 / .1em
```

Y dos valores de espaciado vertical:

```scss
$section-pad: 6.5rem;   // $space-4xl — escritorio
$section-pad-sm: 4.5rem; // $space-3xl — móvil

@mixin section-block($pad: $section-pad, $pad-sm: $section-pad-sm) {
  padding-block: $pad-sm;
  @media (min-width: $bp-lg) { padding-block: $pad; }
}
```

Todo lo demás (radios, gaps de rejilla, padding de tarjeta, número `01`, círculo de
flecha) es **constante de componente**, medida en la tabla de la sección 5, y no un
tamaño de texto.

---

## 8. Verificación (fase 6)

`scripts/audit.mjs` falla si se rompe cualquiera de estas reglas:

1. Todos los `h2` de `main` tienen el mismo `font-size`.
2. Todas las secciones tienen el mismo `padding-block`.
3. `documentElement.scrollWidth === clientWidth`.
4. Ningún nodo hoja de `main` es un texto en mayúsculas de 4+ letras (salvo
   acrónimos reales como `TDAH`), y ningún `.material-symbols-outlined` contiene un
   nombre que no esté en la lista de `scripts/subset-icons.py`.
5. Ninguna `src` de imagen se repite dentro de una misma página.
6. Hay exactamente un `h1`.
7. Máximo 6 bloques en `main` por página, contando hero y contacto.
8. Ninguna rejilla de N columnas con un número de elementos que no sea múltiplo
   de N (la viñeta huérfana).

Dos excepciones, ambas explícitas y visibles en la salida del script:

- **El contenedor beige redondeado** (`.rows`) no se cuenta en la regla 2: no es
  una sección sino un panel retranqueado 48px a cada lado, y su aire interior es
  el de la landing (72/48 en escritorio, 48/32 en móvil). El script lo imprime
  aparte en cada pasada en vez de esconderlo en el filtro.
- **La landing** se audita en modo informativo: tiene 4 tamaños de H2 y 6 de
  padding, y eso es justo lo que viene a corregir la escala.

La FAQ y el formulario son componentes globales con su propio ritmo (104px
verticales también en móvil, medidos en la landing). `SubpageLayout` les aplica la
escala de secciones con un selector por id, sin tocar ninguno de los dos
componentes:

```scss
.page-main :global(#faq),
.page-main :global(#contacto-cita) {
  @include section-block;
}
```

## 9. Decisiones tomadas al aplicar (piloto: terapia familiar)

1. **No hizo falta tocar `Faq.astro`.** El conflicto entre "no tocar FAQ" y
   "alternancia estricta" se resuelve reordenando las superficies, no los
   componentes: con la FAQ en `base` (#f1efe9), la sección de dos columnas va en
   `soft` (#faf9f6). La secuencia final es

   `hero base → panel #dedcd5 → pasos base → dos columnas soft → FAQ base → contacto #dedcd5`

   y no hay dos superficies iguales seguidas. El prop `tone` que se iba a añadir
   a `Faq.astro` no se ha añadido.

2. **La sección "Con adolescentes" va sin imagen, en dos columnas de texto.** El
   único juego de fotos del proyecto tiene una imagen por especialidad: la única
   candidata para esa sección sería `family.jpg`, que ya es la del hero. Repetirla
   dentro de la misma página es lo que el brief prohíbe, así que la sección usa
   las dos columnas de texto de `SplitImage`.

3. **"Orientación académica" desaparece como sección** y queda como enlace de la
   cabecera de "Con adolescentes". Es también lo que hace con el enlace minúsculo
   "Ver el bloque de la web principal": los dos son el mismo tipo de enlace
   pequeño pegado al borde, y los dos pasan a ser el enlace de cabecera con el
   tamaño del rol `small`.

4. **El hero no tiene `padding-top` propio.** `SubpageLayout` ya deja 5rem para
   librar el header fijo; el hero suma su `padding-block` de la escala. Resultado:
   las migas siguen a 104px de la parte superior de la página, el mismo valor que
   antes, pero ahora ese 104px es el mismo que el de todas las demás secciones.
   Si prefieres un hero más pegado al header, el único valor a tocar es
   `$section-pad`.

5. **Los H3 de las tarjetas de pasos suben a 32px** (rol H3) en vez de los 24px
   que usa la landing: el bloque de pasos va justo debajo del de filas y, con
   24px, parecía un bloque de la landing incrustado en una página de la web.

