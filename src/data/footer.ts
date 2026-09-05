export const footerData = {
  brand: {
    name: "Dídac Val",
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
    title: "Estructura Asistencial",
    items: [
      { label: "Ansiedad & Regulación", href: "#" },
      { label: "Trauma & Apego", href: "#" },
      { label: "Terapia de Pareja", href: "#" },
      { label: "Metodología Integradora", href: "#" },
    ],
  },
  legal: {
    title: "Colegiación & Registro",
    collegiate: ["Col. Nº A-03214", "Colegio Oficial de Psicología de Aragón"],
    note: "Centro Sanitario Autorizado",
  },
  bottom: {
    copyright: "© 2024 Dídac Val Psicólogo. Todos los derechos reservados.",
    links: [
      { label: "Aviso Legal", href: "#" },
      { label: "Política de Privacidad", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
} as const;
