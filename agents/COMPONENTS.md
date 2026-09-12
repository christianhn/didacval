---
name: Components & Styling Guide
description: Guía obligatoria para crear nuevos componentes en Didac Val — variables globales, estructura y reutilización
---

## Objetivo

Este agente garantiza que todo componente nuevo respete el sistema de diseño existente y no reintroduzca deuda técnica. Todo color, espaciado, tipografía, radio y breakpoint debe venir de los ficheros globales. Además, impone una arquitectura de componentes pequeños y reutilizables.

Ficheros fuente de verdad:

- `src/styles/_variables.scss` — colores, spacing, gutters, container, radius, breakpoints, z-index
- `src/styles/_typography.scss` — familia y mixins tipográficos
- `src/styles/_mixins.scss` — `container`, `card-shadow`, `hover-scale`, `focus-ring`
- `src/styles/global.scss` — genera `:root { --color-*, --space-*, --radius-*, --gutter-*, --container-max }` a partir de los anteriores

> Si un valor existe como variable/CSS var, **está prohibido hardcodearlo**.

---

## 1. Colores — uso obligatorio de variables

### Regla

- Nunca uses hex (`#191c1a`, `#fff`, `#4d6357`, `#f4f3f1`), `rgb()` ni `rgba()` con valores literales para colores del sistema.
- Usa siempre `var(--color-*)`. El nombre es el key de `$colors` en `_variables.scss`.
- Para opacidades/transparencias no uses `rgba(255,255,255,0.1)`. Usa `color-mix`:

```scss
// mal
background: #ffffff;
background: rgba(248, 250, 245, 0.85);
color: rgba(255, 255, 255, 0.75);

// bien
background: var(--color-surface-container-lowest); // #ffffff
background: color-mix(in srgb, var(--color-surface-bright) 85%, transparent);
color: color-mix(in srgb, var(--color-surface-container-lowest) 75%, transparent);
```

- Para `box-shadow`, bordes sutiles, overlays y gradientes sobre negro:

```scss
// mal
box-shadow: 0 1px 12px rgba(0, 0, 0, 0.04);
border: 1px solid rgba(0, 0, 0, 0.04);
background: linear-gradient(to top, rgba(0,0,0,.58), transparent);

// bien
box-shadow: 0 1px 12px color-mix(in srgb, var(--color-primary) 4%, transparent);
border: 1px solid color-mix(in srgb, var(--color-primary) 4%, transparent);
background: linear-gradient(
  to top,
  color-mix(in srgb, var(--color-primary) 58%, transparent) 8%,
  color-mix(in srgb, var(--color-primary) 28%, transparent) 42%,
  transparent 100%
);
```

### Mapa rápido (los más usados)

| Token SCSS | CSS var | Hex | Uso |
|---|---|---|---|
| `on-surface` | `--color-on-surface` | `#191c1a` | Texto principal |
| `on-surface-variant` | `--color-on-surface-variant` | `#444845` | Texto secundario/muted |
| `sage-muted` | `--color-sage-muted` | `#6e8276` | Acentos, eyebrow, kicker |
| `secondary` | `--color-secondary` | `#4d6357` | Iconografía, links |
| `surface-bone` | `--color-surface-bone` | `#F4F3F1` | Fondos sección clara |
| `surface-bright` | `--color-surface-bright` | `#f8faf5` | Header sólido |
| `surface-dark` | `--color-surface-dark` | `#0a0b0a` | Texto sobre fondo claro invertido / CTA Header transparent |
| `surface-container-lowest` / `on-primary` | `--color-surface-container-lowest` | `#ffffff` | Superficies blancas |
| `surface-subtle` | `--color-surface-subtle` | `#eeede8` | Placeholder / media bg |
| `tertiary-fixed` | `--color-tertiary-fixed` | `#d3e8d9` | Badge fondo icon |
| `warm-sand` | `--color-warm-sand` | `#cbd6b2` | Acento cálido |
| `outline-variant` | `--color-outline-variant` | `#c4c7c4` | Bordes focus |
| `primary` | `--color-primary` | `#000000` | Negro base para `color-mix` |

Lista completa en `src/styles/_variables.scss:7`. Si necesitas un color nuevo, añádelo allí primero — no lo inventes en el componente.

### Import

Todo `<style lang="scss">` debe empezar así:

```scss
@use "../../styles/variables" as *;
@use "../../styles/typography" as *;
// @use "../../styles/mixins" as *; // si necesitas container/card-shadow/etc.
```

---

## 2. Spacing, layout, radius, breakpoints, z-index

- **Spacing:** `$space-3xs` (0.125rem) → `$space-5xl` (9rem). También como `var(--space-*)`.
- **Gutters:** `$gutter-mobile` (1.25rem), `$gutter-desktop` (2rem) → `var(--gutter-*)`
- **Container:** `$container-max` (90rem) → `var(--container-max)`
- **Radius:** `$radius-default` (0.5rem), `$radius-lg` (1.5rem), `$radius-xl` (2rem), `$radius-full` (624rem) → `var(--radius-*)`
- **Breakpoints:** `$bp-sm` 40rem, `$bp-md` 48rem, `$bp-lg` 64rem, `$bp-xl` 80rem — úsalos en `@media (min-width: $bp-lg)`
- **Z-index:** `$z-header` (50)

```scss
// mal
padding: 16px 20px;
gap: 12px;
border-radius: 9999px;
@media (min-width: 1024px) { ... }

// bien
padding: $space-md $gutter-mobile;
gap: $space-sm;
border-radius: $radius-full;
@media (min-width: $bp-lg) { ... }
```

---

## 3. Tipografía

Nunca declares `font-family`, `font-size`, `line-height`, `letter-spacing` a mano. Usa los mixins de `_typography.scss`:

`text-body-sm`, `text-body-base`, `text-body-lg`, `text-headline-sm`, `text-headline-lg`, `text-headline-xl`, `text-headline-xl-mobile`, `text-display-hero`, `text-display-hero-mobile`, `text-metric-counter`, `text-index-item`, `text-label-pill`, `text-caption-micro`, `text-profile-subtitle`

```scss
.titulo { @include text-headline-xl; color: var(--color-on-surface); }
.eyebrow { @include text-caption-micro; color: var(--color-sage-muted); text-transform: uppercase; }
```

`$font-family-base` solo se usa dentro de los mixins o casos muy excepcionales.

---

## 4. Estructura de carpetas — componente por sección, pero pequeños

```
src/components/
├── sections/   # cromado global (Header, Footer) — 1 por archivo, sin lógica de negocio
├── layout/     # secciones de página (Hero, Specialties, Profile, Metrics, Process, Faq, Contact…)
│               # 1 sección = 1 archivo. Máx ~150–180 líneas. Si crece, extrae.
└── ui/         # primitivos reutilizables (SpecialtyCard, PlaceholderIcon, Button, Pill, Card, Badge…)
```

**Reglas:**

1. `layout/*.astro` es un **orquestador**: importa datos de `src/data/*.ts`, compone `ui/*` y define solo el grid/wrapper de la sección.
2. Todo bloque con lógica visual propia, estado hover/animación o que se repite ≥2 veces va a `ui/`.
3. Si un `layout` supera ~180 líneas o tiene >3 niveles de anidación SCSS, es señal de que debes extraer.
4. `sections` no debe importar `layout` ni `ui` de negocio.

Flujo para nueva sección (ej. `Testimonials`):

```
src/data/testimonials.ts   # datos tipados
src/components/ui/TestimonialCard.astro  # card reutilizable
src/components/ui/QuoteIcon.astro        # si hace falta
src/components/layout/Testimonials.astro # sección: header + grid de TestimonialCard
src/pages/index.astro      # importa <Testimonials />
```

---

## 5. Reutilización — checklist antes de escribir SCSS nuevo

Antes de crear un componente, verifica:

- [ ] ¿Existe ya un `ui/*` que haga esto? (`SpecialtyCard`, `PlaceholderIcon`, `BentoStrip`, etc.)
- [ ] ¿Puedo componer con `mixins` existentes (`container`, `card-shadow`, `focus-ring`) en vez de reescribir?
- [ ] ¿Estoy usando `var(--color-*)` y no hex?
- [ ] ¿Estoy usando `$space-*`, `$gutter-*`, `$radius-*`, `$bp-*`?
- [ ] ¿Estoy usando `@include text-*` y no font-size manual?
- [ ] ¿Mi `layout` solo orquesta y delega a `ui`?

Si repites un patrón de SCSS en ≥2 sitios, extráelo:

- A `src/styles/_mixins.scss` si es genérico (ej. `hairline-border`, `glass-panel`).
- A `src/components/ui/Nombre.astro` si es visual (ej. `PillButton`, `SectionHeader`).

---

## 6. Patrón de datos

Toda sección recibe contenido de `src/data/*.ts`, no hardcodeado en el `.astro`:

```ts
// src/data/testimonials.ts
export const testimonialsData = {
  eyebrow: "Testimonios",
  title: "Historias reales",
  items: [{ quote, author, role }]
} as const;
```

```astro
---
import { testimonialsData } from "../../data/testimonials";
import TestimonialCard from "../ui/TestimonialCard.astro";
---
<section class="testimonials" aria-labelledby="testimonials-title">
  <div class="testimonials__inner">
    <header>...</header>
    <div class="testimonials__grid">
      {testimonialsData.items.map(item => <TestimonialCard {...item} />)}
    </div>
  </div>
</section>

<style lang="scss">
  @use "../../styles/variables" as *;
  @use "../../styles/typography" as *;
  .testimonials { background: var(--color-surface-bone); padding: $space-3xl $gutter-mobile; }
  .testimonials__inner { @include container; }
  .testimonials__grid { display: grid; gap: $space-md; @media (min-width: $bp-lg) { grid-template-columns: repeat(3, 1fr); } }
</style>
```

---

## 7. Plantilla mínima para nueva sección

```astro
---
import { newSectionData } from "../../data/newSection";
import Card from "../ui/Card.astro";
---
<section class="new-section" aria-labelledby="new-section-title">
  <div class="new-section__inner">
    <header class="new-section__header">
      <span class="new-section__eyebrow">{newSectionData.eyebrow}</span>
      <h2 id="new-section-title" class="new-section__title">{newSectionData.title}</h2>
      <p class="new-section__desc">{newSectionData.description}</p>
    </header>
    <div class="new-section__grid">
      {newSectionData.items.map(i => <Card {...i} />)}
    </div>
  </div>
</section>

<style lang="scss">
  @use "../../styles/variables" as *;
  @use "../../styles/typography" as *;

  .new-section {
    background: var(--color-surface-container-lowest);
    padding: $space-3xl $gutter-mobile;
    @media (min-width: $bp-lg) { padding-inline: $gutter-desktop; }
  }
  .new-section__inner { max-width: $container-max; margin-inline: auto; display: flex; flex-direction: column; gap: $space-xl; }
  .new-section__eyebrow { @include text-caption-micro; color: var(--color-sage-muted); }
  .new-section__title { @include text-headline-xl; color: var(--color-on-surface); }
  .new-section__desc { @include text-body-sm; color: var(--color-on-surface-variant); }
  .new-section__grid { display: grid; gap: $space-md; @media (min-width: $bp-md) { grid-template-columns: repeat(2, 1fr); } @media (min-width: $bp-lg) { grid-template-columns: repeat(4, 1fr); } }
</style>
```

---

## 8. Anti-patrones (bloqueados)

```scss
// ❌ NUNCA
color: #191c1a; // usa var(--color-on-surface)
background: #f4f3f1; // usa var(--color-surface-bone)
background: rgba(0,0,0,0.04); // usa color-mix(in srgb, var(--color-primary) 4%, transparent)
font-size: 13px; // usa @include text-body-sm
padding: 24px; // usa $space-lg
border-radius: 32px; // usa $radius-xl
@media (min-width: 1024px) // usa $bp-lg
```

## 9. Verificación

Antes de dar por hecho un componente:

1. `grep -R "#[0-9a-fA-F]" src/components --include="*.astro"` no debe devolver hex fuera de comentarios.
2. `grep -R "rgba(" src/components` solo permitido si es `color-mix`; migrar cualquier `rgba(literal)`.
3. `npm run build` debe pasar sin errores de SCSS.
4. Revisar que `ui/*` nuevos sean importables desde al menos 2 `layout/*` o estén justificados como extracción por tamaño.

---

## Referencias

- Implementación previa correcta: `src/components/layout/Metrics.astro`, `src/components/layout/Contact.astro`, `src/components/layout/Profile.astro` — todas usan `var(--color-*)`, `$space-*`, `$bp-*` y mixins tipográficos.
- Corrección de migración: `src/components/ui/SpecialtyCard.astro`, `src/components/ui/PlaceholderIcon.astro`, `src/components/layout/Specialties.astro`, `src/components/sections/Header.astro` — migrados de hardcode a variables globales (2026-09).
- Sistema de diseño: `agents/DESIGN.md`
