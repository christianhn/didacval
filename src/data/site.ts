import logo from "../assets/brand/logo.png";

export const siteData = {
  brand: {
    name: "Didac Val",
    logo,
    logoAlt: "Didac Val, psicólogo en Zaragoza",
  },
  // `active` está en todos los items (no solo en "Inicio") porque `as const`
  // convierte la lista en una unión de literales: omitirlo hacía que
  // `item.active` no existiera en el tipo del resto de entradas.
  nav: [
    { label: "Inicio", href: "#inicio", path: "inicio", active: true },
    {
      label: "Especialidades",
      href: "#areas-clinicas",
      path: "especialidades",
      active: false,
    },
    { label: "El proceso", href: "#proceso", path: "proceso", active: false },
    {
      label: "Preguntas Frecuentes",
      href: "#faq",
      path: "preguntas-frecuentes",
      active: false,
    },
    { label: "Sobre mí", href: "#sobre-mi", path: "sobre-mi", active: false },
  ],
  cta: {
    label: "Primera sesión gratuita",
    href: "#contacto-cita",
    path: "primera-consulta",
  },
  // Menú lateral de móvil. El CTA de escritorio se traslada aquí dentro: en
  // móvil el header solo lleva marca + disparador.
  menu: {
    triggerLabel: "Menu",
    closeLabel: "Cerrar menú",
    eyebrow: "Navegación",
  },
} as const;
