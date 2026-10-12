export const contactData = {
  eyebrow: "Primera sesión gratuita",
  title: "Cuéntame qué te trae",
  description:
    "Primera sesión informativa gratuita y sin compromiso. Te respondo en menos de 24 horas laborables.",
  media: {
    badge: "Sagasta 17 · Zaragoza",
    placeholder: "Espacio para la imagen de la consulta",
  },
  form: {
    fields: {
      name: { label: "Nombre", placeholder: "Ej: María García" },
      // TODO con Didac: ahora se piden correo y teléfono los dos. Él lo
      // consulta y decidimos si vuelve a bastar con uno de los dos.
      email: {
        label: "Correo electrónico",
        placeholder: "tuemail@ejemplo.com",
      },
      phone: { label: "Teléfono", placeholder: "Ej: 600 000 000" },
      mode: {
        label: "Modalidad",
        options: [
          {
            value: "presencial",
            label: "Presencial",
            description: "Paseo de Sagasta 17, Zaragoza",
            icon: "location_on",
          },
          {
            value: "online",
            label: "Online",
            description: "Por videollamada",
            icon: "videocam",
          },
        ],
      },
      message: {
        label: "Motivo de consulta (opcional)",
        placeholder: "Con unas líneas basta",
      },
      consent: {
        text: "Acepto la",
        // TODO con Didac: la web aún no tiene página de política de privacidad
        // (el footer enlaza a "#"). Apuntarla al crearla.
        link: { label: "política de privacidad", href: "#" },
      },
    },
    submit: "Solicitar sesión gratuita",
    feedback:
      "Mensaje recibido correctamente. Didac Val se pondrá en contacto contigo en menos de 24 horas laborables.",
    error: "Revisa los campos obligatorios e inténtalo de nuevo.",
  },
} as const;
