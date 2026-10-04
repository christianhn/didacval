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
  description: "Tres acompañamientos que merecen una explicación propia.",
  headerCta: {
    label: "Consultar tu caso sin compromiso",
    href: "#contacto-cita",
  },
  items: [
    {
      icon: "compass",
      kicker: "Bachillerato · Grados · Universidad",
      title: "Orientación académica",
      subtitle: "Elegir sin agobio.",
      bullets: [
        "Conocer todas tus opciones",
        "Separar lo que quieres de lo que se espera de ti",
        "Decidir con más calma",
      ],
    },
    {
      icon: "clock",
      kicker: "Preparación profesional",
      title: "Oposiciones",
      subtitle: "Una carrera de fondo.",
      bullets: [
        "Planificación realista",
        "Autocuidado y descansos",
        "Gestión del estrés",
      ],
    },
    {
      icon: "chat",
      kicker: "Adolescencia",
      title: "Adolescentes",
      subtitle: "Un espacio propio.",
      bullets: [
        "Autoestima y conducta",
        "Ansiedad y estado de ánimo",
        "Relaciones familiares",
      ],
    },
  ],
};
