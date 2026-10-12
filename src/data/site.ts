import logo from "../assets/brand/logo.png";

export const siteData = {
  brand: {
    name: "Didac Val",
    logo,
    logoAlt: "Didac Val, psicólogo en Zaragoza",
  },
  nav: [
    { label: "Inicio", href: "#inicio", path: "inicio", active: true },
    { label: "Especialidades", href: "#areas-clinicas", path: "especialidades" },
    { label: "El proceso", href: "#proceso", path: "proceso" },
    { label: "Preguntas Frecuentes", href: "#faq", path: "preguntas-frecuentes" },
    { label: "Sobre mí", href: "#sobre-mi", path: "sobre-mi" },
  ],
  cta: {
    label: "Primera sesión gratuita",
    href: "#contacto-cita",
    path: "primera-consulta",
  },
} as const;
