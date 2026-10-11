export type DetailIconName = "compass" | "clock" | "chat";

export interface DetailItem {
  icon: DetailIconName;
  kicker: string;
  title: string;
  subtitle: string;
  bullets: readonly string[];
}

export interface DetailsSectionData {
  eyebrow: string;
  title: string;
  description: string;
  headerCta: { label: string; href: string };
  items: readonly DetailItem[];
}

// TODO: cuando el formulario de contacto soporte el parámetro `motivo`
// (p. ej. "#contacto-cita?motivo=orientacion") y lo use para precargar el
// motivo del mensaje, usarlo en el CTA de cabecera de la sección.
export const detailsData: DetailsSectionData = {
  eyebrow: "MÁS INFORMACIÓN",
  title: "Áreas en detalle",
  description: "Tres áreas de trabajo que te explico una a una.",
  headerCta: {
    label: "Consultar tu caso sin compromiso",
    href: "#contacto-cita",
  },
  items: [
    {
      icon: "compass",
      kicker: "Bachillerato · Grados · Universidad",
      title: "Orientación académica",
      subtitle: "Tu decisión, con calma",
      bullets: [
        "Repasamos juntos todas tus opciones",
        "Separamos lo que quieres de lo que se espera de ti",
        "Decides con más criterio y sin ruido",
      ],
    },
    {
      icon: "clock",
      kicker: "Preparación profesional",
      title: "Oposiciones",
      subtitle: "Prepararte sin desgastarte",
      bullets: [
        "Un plan realista, hecho para ti",
        "Descanso y hábitos que te sostienen",
        "Estrategias para los momentos de presión",
      ],
    },
    {
      icon: "chat",
      kicker: "Adolescencia",
      title: "Adolescentes",
      subtitle: "Un espacio donde sí te escuchan",
      bullets: [
        "Tu autoestima y tus decisiones",
        "La ansiedad y el estado de ánimo",
        "La relación con la familia y con los amigos",
      ],
    },
  ],
};
