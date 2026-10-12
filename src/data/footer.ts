export const footerData = {
  brand: {
    name: "Didac Val",
    description: "Psicólogo en Zaragoza. Terapia presencial y online.",
    status: "Agenda abierta",
  },
  contact: {
    title: "Ubicación & Contacto",
    // TODO con Didac: confirmar la planta exacta. La web antigua
    // (didacvalpsicologo.es) decía "entresuelo izquierda" y aquí aparecía
    // "Principal". Hasta que lo confirme, todas las variantes de la web usan
    // "entresuelo izquierda".
    address: ["Paseo de Sagasta 17, entresuelo izquierda", "50008 Zaragoza"],
    phone: { label: "+34 622 58 85 60", href: "tel:+34622588560" },
    email: {
      label: "didacvalpsicologia@gmail.com",
      href: "mailto:didacvalpsicologia@gmail.com",
    },
  },
  links: {
    title: "Áreas de trabajo",
    items: [
      { label: "Ansiedad y estrés", href: "#areas-clinicas" },
      { label: "Sexología", href: "#areas-clinicas" },
      { label: "Terapia individual", href: "#areas-clinicas" },
      { label: "Adolescentes y familia", href: "#areas-clinicas" },
    ],
  },
  legal: {
    title: "Colegiación & Registro",
    collegiate: ["Col. Nº A-03214", "Colegio Oficial de Psicología de Aragón"],
    // TODO con Didac: "Centro Sanitario Autorizado" ya estaba en la web, pero
    // falta el nº de registro sanitario que lo respalda. Confirmar antes de
    // publicar; si no, quitarlo.
    note: "Centro Sanitario Autorizado",
  },
  bottom: {
    links: [
      { label: "Aviso Legal", href: "#" },
      { label: "Política de Privacidad", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
} as const;
