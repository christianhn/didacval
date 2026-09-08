export const siteData = {
  brand: {
    name: "Didac Val",
    // REVISAR CON DIDAC: confirmar dato real antes de publicar
    subtitle: "Psicología Clínica & Sanitaria",
    logo: "/favicon.png",
    logoAlt: "Didac Val Psicólogo",
  },
  nav: [
    { label: "Inicio", href: "#inicio", path: "inicio", active: true },
    { label: "Especialidades", href: "#areas-clinicas", path: "especialidades" },
    { label: "Metodología", href: "#metodologia", path: "metodologia" },
    { label: "Preguntas Frecuentes", href: "#faq", path: "preguntas-frecuentes" },
    { label: "Sobre mí", href: "#sobre-mi", path: "sobre-mi" },
  ],
  cta: {
    label: "Pedir Cita",
    href: "#contacto-cita",
    path: "primera-consulta",
  },
} as const;
