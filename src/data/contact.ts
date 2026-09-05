export const contactData = {
  eyebrow: "Reserva tu cita",
  title: "Da el primer paso hacia tu equilibrio.",
  description:
    "Completa este formulario breve para coordinar tu primera sesión informativa gratuita o solicitar información sobre disponibilidad presencial y online.",
  infoCards: [
    {
      icon: "location_on",
      title: "Consulta en Zaragoza",
      detail: "Paseo de Sagasta 17, entresuelo izquierda · 50008 Zaragoza",
    },
    {
      icon: "phone_in_talk",
      title: "Atención Telefónica Directa",
      detail: "+34 622 58 85 60",
      href: "tel:+34622588560",
    },
    {
      icon: "mail",
      title: "Correo Electrónico",
      detail: "didacvalpsicologia@gmail.com",
      href: "mailto:didacvalpsicologia@gmail.com",
    },
  ],
  map: {
    label: "Centro de Zaragoza · Sagasta 17",
    icon: "pin_drop",
    location: "Paseo de Sagasta 17, Zaragoza, Spain",
  },
  form: {
    title: "Formulario de Primera Consulta",
    badge: "Gratuita y sin compromiso",
    fields: {
      name: { label: "Nombre completo *", placeholder: "Ej: María García" },
      phone: { label: "Teléfono de contacto *", placeholder: "Ej: 600 000 000" },
      email: { label: "Correo electrónico *", placeholder: "tuemail@ejemplo.com" },
      mode: {
        label: "Modalidad preferente",
        options: [
          { value: "presencial", label: "Presencial en Sagasta 17 (Zaragoza)" },
          { value: "online", label: "Online por videollamada" },
          { value: "indiferente", label: "Indiferente / Primera llamada valorativa" },
        ],
      },
      message: {
        label: "Breve motivo de consulta (opcional)",
        placeholder:
          "Explica de forma concisa qué te gustaría trabajar (ansiedad, estrés laboral, problemas en pareja, etc.)",
      },
      consent:
        "Acepto el tratamiento confidencial de mis datos con el fin de ponerme en contacto con la consulta psicológica de Dídac Val según el Reglamento General de Protección de Datos (RGPD).",
    },
    submit: "Enviar Solicitud de Cita",
    feedback:
      "Mensaje recibido correctamente. Dídac Val se pondrá en contacto contigo en menos de 24 horas laborables.",
  },
} as const;
