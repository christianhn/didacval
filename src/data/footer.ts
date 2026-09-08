export const footerData = {
  brand: {
    name: "Didac Val",
    description:
      "Atención psicológica clínica basada en la evidencia. Espacio de seguridad y rigor técnico en Zaragoza y modalidad telemática.",
    status: "Consulta Activa · Citas Disponibles",
  },
  contact: {
    title: "Ubicación & Contacto",
    address: ["Paseo Sagasta 17, Principal", "50008 Zaragoza"],
    phone: { label: "+34 622 58 85 60", href: "tel:+34622588560" },
    email: { label: "didacvalpsicologia@gmail.com", href: "mailto:didacvalpsicologia@gmail.com" },
  },
  links: {
    title: "Áreas de trabajo",
    items: [
      { label: "Ansiedad & Regulación", href: "#" },
      // REVISAR CON DIDAC: confirmar dato real antes de publicar
      { label: "Trauma & Apego", href: "#" },
      // REVISAR CON DIDAC: confirmar dato real antes de publicar
      { label: "Terapia de Pareja", href: "#" },
      { label: "Metodología Integradora", href: "#" },
    ],
  },
  legal: {
    title: "Colegiación & Registro",
    // REVISAR CON DIDAC: confirmar dato real antes de publicar
    collegiate: ["Col. Nº A-03214", "Colegio Oficial de Psicología de Aragón"],
    // REVISAR CON DIDAC: confirmar dato real antes de publicar
    note: "Centro Sanitario Autorizado",
  },
  bottom: {
    copyright: "© 2024 Didac Val Psicólogo. Todos los derechos reservados.",
    links: [
      { label: "Aviso Legal", href: "#" },
      { label: "Política de Privacidad", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
} as const;
