import type { ImageMetadata } from "astro";
import type { RowsItem } from "../../components/layout/RowsItem.astro";
import type { RowListItem } from "../../components/ui/RowList.astro";
import type { RelatedLink } from "../../components/ui/RelatedServices.astro";
import type { Step } from "../../components/layout/NumberedSteps.astro";
import type { Note } from "../../components/ui/NoteCard.astro";
import type { FaqItem } from "../../components/layout/Faq.astro";
import type { FormationEntry } from "../../components/ui/FormationGroup.astro";
import type { Crumb } from "../structuredData";

/** Superficies del sistema. El `panel` se usa una sola vez por página. */
export type SectionTone = "base" | "soft";

/**
 * Forma común de una página interior.
 *
 * Ningún texto vive dentro de un .astro: las páginas se componen desde aquí, y
 * las secciones se dibujan a partir de estas estructuras. Así el contenido se
 * puede revisar sin tocar maquetación, y las meta únicas de cada página se leen
 * en un solo sitio.
 */
export interface PageSeo {
  title: string;
  description: string;
}

export interface PageHeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: ImageMetadata;
  imageAlt: string;
  /** Texto corto para las migas de pan. */
  breadcrumbLabel: string;
}

// =========================================================
// Sistema de composición (DESIGN_SPEC.md)
// =========================================================
//
// Las secciones se componen con las seis recetas de la fase 3 del brief:
// PageHero (en la página, no aquí) + RowsContainer + NumberedSteps + SplitImage
// + FAQ + Contact. Cada bloque lleva su superficie, y las superficies alternan.

/** Contenedor beige redondeado. `variant: "full"` lo deja a sangre. */
export interface RowsBlock {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  /** Enlace de la cabecera de sección. */
  link?: { label: string; href: string };
  items: readonly RowsItem[];
  variant?: "panel" | "full";
}

export interface StepsBlock {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  steps: readonly Step[];
  tone?: SectionTone;
  /** "Un apunte" bajo la cabecera, en la columna izquierda. */
  aside?: Note;
  /** Enlace discreto bajo la última tarjeta, al bloque equivalente de la landing. */
  footerLink?: { label: string; href: string };
}

export interface SplitBlock {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  /** Párrafos de la columna de texto. */
  paragraphs: readonly string[];
  /** Enlace dentro del último párrafo (p. ej. el bloque que ya está en la landing). */
  paragraphLink?: { label: string; href: string };
  /** "Un apunte": confidencialidad, advertencia o condición. */
  note?: Note;
  /**
   * Sin imagen, la sección va en dos columnas de texto: repetir la foto del hero
   * no es una opción, y la segunda columna la ocupa el `note`.
   */
  image?: ImageMetadata;
  imageAlt?: string;
  /** Pone la imagen a la izquierda en vez de a la derecha. */
  reverse?: boolean;
  tone?: SectionTone;
}

export interface FaqBlock {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  items: readonly FaqItem[];
}

// =========================================================
// Tipos heredados, pendientes de migrar página a página
// =========================================================
// TODO borrar en cuanto las cinco páginas de servicio y /quien-soy/ usen el
// sistema de arriba.

export interface TextBlock {
  id: string;
  eyebrow?: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  link?: { label: string; href: string };
  layout?: "wide" | "aside";
  tone?: "bone" | "canvas" | "transparent";
  footnote?: string;
}

export interface FormationBlock {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  groups: readonly FormationEntry[];
}

export interface CtaBlock {
  title: string;
  description: string;
}

export type PageBlock =
  | { kind: "rows"; data: RowsBlock }
  | { kind: "steps"; data: StepsBlock }
  | { kind: "split"; data: SplitBlock }
  | { kind: "faq"; data: FaqBlock }
  // Heredados: se quitan al migrar cada página.
  | { kind: "text"; data: TextBlock }
  | { kind: "formation"; data: FormationBlock }
  | { kind: "cta"; data: CtaBlock }
  | { kind: "rows-legacy"; data: LegacyRowsBlock }
  | { kind: "split-legacy"; data: LegacySplitBlock }
  | {
      kind: "process-link";
      data: { title: string; description: string; href: string };
    };

/** `rows` antiguo: con subtítulo libre en la fila y franja de enlaces al pie. */
export interface LegacyRowsBlock {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  cta?: { label: string; href: string };
  items: readonly RowListItem[];
  variant?: "panel" | "full";
  related?: { title?: string; links: readonly RelatedLink[] };
}

/** `split` antiguo:tonos `bone`/`canvas`/`soft` e imagen obligatoria. */
export interface LegacySplitBlock {
  id: string;
  eyebrow?: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  image: ImageMetadata;
  imageAlt: string;
  direction?: "text-start" | "media-start";
  tone?: "bone" | "canvas" | "soft";
  footnote?: string;
}

export interface PageContent {
  /** Slug de la ruta, con barras (p. ej. "/sexologo-zaragoza/"). */
  path: string;
  /** Identificador corto que viaja en el campo oculto `origen` del formulario. */
  slug: string;
  seo: PageSeo;
  hero: PageHeroContent;
  blocks: readonly PageBlock[];
  /** Migas completas. Si se omite, se generan "Inicio > hero.breadcrumbLabel". */
  breadcrumb?: readonly Crumb[];
}

// ------------------------------------------------------------- Enlaces comunes a todas las páginas

/** Enlace al formulario de la página: todas las páginas lo tienen al final. */
export const formHref = "#contacto-cita";

/** CTA principal, idéntico en toda la web. */
export const primaryCta = {
  label: "Primera sesión informativa gratuita",
  href: formHref,
};

/** Enlace al bloque de 4 pasos de la landing. */
export const processLink = {
  href: "/#proceso",
  label: "Ver las cuatro fases del proceso",
};

/** Enlaces entre las cuatro páginas de servicio. */
export const serviceRoutes = {
  ansiedad: {
    path: "/psicologo-ansiedad-zaragoza/",
    label: "Ansiedad y estrés",
    // `short` es la línea de apoyo que acompaña al enlace: describe lo que se
    // encuentra, no repite el título.
    short: "Tensión, insomnio y la sensación de ir siempre al límite.",
  },
  sexologia: {
    path: "/sexologo-zaragoza/",
    label: "Sexología",
    short: "Disfunción eréctil, eyaculación precoz y bajo deseo.",
  },
  adultos: {
    path: "/terapia-adultos-zaragoza/",
    label: "Terapia para adultos",
    short: "Tristeza, duelo, estrés laboral y autoestima.",
  },
  familiar: {
    path: "/terapia-familiar-zaragoza/",
    label: "Terapia familiar y adolescentes",
    short: "Conflictos, comunicación y orientación académica.",
  },
} as const;

/** Menú de teléfono del hero, compartido por todas las páginas. */
export const phoneCta = {
  label: "Llamar al 622 58 85 60",
  href: "tel:+34622588560",
};