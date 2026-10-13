import consultaImg from "../../assets/contact/consulta.jpeg";
import { siteData } from "../site";
import { serviceRoutes } from "./types";

export const contactoPage = {
  path: "/contacto/",
  slug: "contacto",

  seo: {
    title: "Contacto y primera sesión gratuita | Didac Val, psicólogo en Zaragoza",
    description:
      "Pide cita con Didac Val, psicólogo en Zaragoza. Paseo de Sagasta 17 y online. L-V 9:00-20:00. Tel. 622 58 85 60. Primera sesión informativa gratuita.",
  },

  hero: {
    eyebrow: "Reserva tu cita",
    title: "Contacto",
    subtitle:
      "Cuéntame qué te trae y te respondo en menos de 24 horas laborables.",
    image: consultaImg,
    imageAlt: "Interior de la consulta en Paseo de Sagasta 17, Zaragoza",
    breadcrumbLabel: "Contacto",
  },

  /** Datos de contacto: todos salen de siteData, no se repiten aquí. */
  contactItems: [
    {
      id: "direccion",
      icon: "location_on",
      label: "Consulta",
      value: `${siteData.contact.address.street}`,
      detail: siteData.contact.address.city,
      href: siteData.contact.address.mapsUrl,
      hrefLabel: siteData.contact.address.mapsLabel,
      external: true,
    },
    {
      id: "telefono",
      icon: "call",
      label: "Teléfono",
      value: siteData.contact.phone.label,
      href: siteData.contact.phone.href,
      detail: "Llágame y lo comentamos por teléfono",
    },
    {
      id: "email",
      icon: "mail",
      label: "Correo",
      value: siteData.contact.email.label,
      href: siteData.contact.email.href,
    },
    {
      id: "horario",
      icon: "schedule",
      label: "Horario",
      value: siteData.contact.hours.summary,
      detail: siteData.contact.responseTime,
    },
  ],

  /** Segundo canal de contacto. TODO confirmar con Didac (nota 7). */
  whatsapp: {
    label: "También por WhatsApp",
    href: siteData.contact.phone.whatsapp,
  },

  /** Línea final de enlaces a las áreas, en lugar de la lista de terapias. */
  areas: [
    { label: serviceRoutes.ansiedad.label, href: serviceRoutes.ansiedad.path },
    { label: serviceRoutes.sexologia.label, href: serviceRoutes.sexologia.path },
    { label: serviceRoutes.adultos.label, href: serviceRoutes.adultos.path },
    { label: serviceRoutes.familiar.label, href: serviceRoutes.familiar.path },
  ],

  // TODO confirmar con Didac: el número de WhatsApp. Está preparado en
  // siteData.contact.phone.whatsapp pero no se muestra en ningún sitio hasta
  // que él confirme que quiere usarlo como canal público.
} as const;