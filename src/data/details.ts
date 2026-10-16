export type DetailIconName = "compass" | "clock" | "chat";

export interface DetailItem {
  title: string;
  subtitle: string;
  bullets: readonly string[];
  linkLabel: string;
  linkHref: string;
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
  eyebrow: "Más información",
  title: "Tres situaciones muy concretas",
  description: "Las que más veo en consulta.",
  headerCta: {
    label: "Consultar mi caso",
    href: "#contacto-cita",
  },
  items: [
    {
      title: "Orientación académica",
      subtitle: "Tu decisión, con calma",
      bullets: [
        "Repasamos juntos tus opciones",
        "Separamos lo que quieres de lo que se espera de ti",
        "Decides con más criterio y menos ruido",
      ],
      linkLabel: "Ver orientación académica",
      linkHref: "#orientacion-academica",
    },
    {
      title: "Oposiciones",
      subtitle: "Prepararte sin desgastarte",
      bullets: [
        "Un plan realista, hecho para ti",
        "Descanso y hábitos que te sostienen",
        "Estrategias para los momentos de presión",
      ],
      linkLabel: "Ver oposiciones",
      linkHref: "#oposiciones",
    },
    {
      title: "Adolescentes",
      subtitle: "Un espacio donde sí te escuchan",
      bullets: [
        "Autoestima y toma de decisiones",
        "Ansiedad y estado de ánimo",
        "Relación con la familia y los amigos",
      ],
      linkLabel: "Ver adolescentes",
      linkHref: "#adolescentes",
    },
  ],
};
