import type { ImageMetadata } from "astro";
import type { RowListItem } from "../../components/ui/RowList.astro";
import type { RelatedLink } from "../../components/ui/RelatedServices.astro";
import type { FormationEntry } from "../../components/ui/FormationGroup.astro";
import type { FaqItem } from "../../components/layout/Faq.astro";
import type { Crumb } from "../structuredData";

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

export interface TextBlock {
  id: string;
  eyebrow?: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  link?: { label: string; href: string };
  layout?: "wide" | "aside";
  tone?: "bone" | "canvas" | "transparent";
  /** Párrafo de cierre en cuerpo pequeño (nota al pie del bloque). */
  footnote?: string;
}

export interface RowsBlock {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  cta?: { label: string; href: string };
  items: readonly RowListItem[];
  variant?: "panel" | "full";
  /** Franja con enlaces a otras áreas, al final del bloque de filas. */
  related?: { title?: string; links: readonly RelatedLink[] };
}

export interface SplitBlock {
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

export interface FaqBlock {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  items: readonly FaqItem[];
}

/**
 * Bloques admitidos por una página, en el orden en que se pintan.
 *
 * `process` reutiliza el bloque de 4 pasos de la landing con un enlace a
 * `/#proceso` en lugar de repetir los textos: son los mismos cuatro pasos y
 * copiarlos aquí sólo abriría la puerta a que se desincronicen.
 */
export type PageBlock =
  | { kind: "text"; data: TextBlock }
  | { kind: "rows"; data: RowsBlock }
  | { kind: "split"; data: SplitBlock }
  | { kind: "formation"; data: FormationBlock }
  | { kind: "faq"; data: FaqBlock }
  | { kind: "cta"; data: CtaBlock }
  | {
      kind: "process-link";
      data: { title: string; description: string; href: string };
    };

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
    short: "Terapia para la ansiedad y el estrés",
  },
  sexologia: {
    path: "/sexologo-zaragoza/",
    label: "Sexología",
    short: "Dificultades sexuales de origen psicológico",
  },
  adultos: {
    path: "/terapia-adultos-zaragoza/",
    label: "Terapia para adultos",
    short: "Terapia psicológica para adultos",
  },
  familiar: {
    path: "/terapia-familiar-zaragoza/",
    label: "Terapia familiar y adolescentes",
    short: "Terapia familiar y con adolescentes",
  },
} as const;

/** Menú de teléfono del hero, compartido por todas las páginas. */
export const phoneCta = {
  label: "Llamar al 622 58 85 60",
  href: "tel:+34622588560",
};