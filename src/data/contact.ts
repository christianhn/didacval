import { siteData } from "./site";

export const contactData = {
  eyebrow: "Primera sesión gratuita",
  title: "Cuéntame qué te pasa",
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
      // "Modalidad" era el rótulo del campo y no le decía nada a quien
      // rellena el formulario: pregunta en qué formato se hace la sesión.
      mode: {
        label: "¿Cómo prefieres la sesión?",
        options: siteData.contact.modalities,
      },
      message: {
        label: "Motivo de consulta (opcional)",
        placeholder: "Con unas líneas basta",
      },
      consent: {
        text: "Acepto la",
        link: { label: "política de privacidad", href: siteData.legal.privacy.href },
      },
    },
    submit: "Solicitar sesión gratuita",
    feedback:
      "Mensaje recibido correctamente. Didac Val se pondrá en contacto contigo en menos de 24 horas laborables.",
    error: "Revisa los campos obligatorios e inténtalo de nuevo.",
  },
} as const;