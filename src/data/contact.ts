export const contactData = {
  eyebrow: "Reserva tu cita",
  title: "Da el primer paso hacia tu equilibrio.",
  description:
    "Primera consulta informativa gratuita y sin compromiso. Te responderé en menos de 24 horas laborables.",
  media: {
    badge: "Sagasta 17 · Zaragoza",
    placeholder: "Espacio para la imagen de la consulta",
  },
  form: {
    fields: {
      name: { label: "Nombre", placeholder: "Ej: María García" },
      phone: { label: "Teléfono", placeholder: "Ej: 600 000 000" },
      email: {
        label: "Correo electrónico",
        placeholder: "tuemail@ejemplo.com",
      },
      mode: {
        label: "Modalidad preferente",
        options: [
          { value: "presencial", label: "Presencial", description: "Paseo de Sagasta 17, Zaragoza", icon: "location_on" },
          { value: "online", label: "Online", description: "Por videollamada", icon: "videocam" },
        ],
      },
      message: {
        label: "Motivo de consulta (opcional)",
        placeholder:
          "Ansiedad, estrés laboral, problemas de pareja, autoestima…",
      },
      consent: {
        text: "Acepto la",
        // REVISAR CON DIDAC: la web aún no tiene página de política de
        // privacidad (el footer enlaza a "#"). Apuntarla al crearla.
        link: { label: "política de privacidad", href: "#" },
      },
    },
    submit: "Enviar mi solicitud",
    feedback:
      "Mensaje recibido correctamente. Didac Val se pondrá en contacto contigo en menos de 24 horas laborables.",
    error: "Revisa los campos obligatorios e inténtalo de nuevo.",
  },
} as const;
