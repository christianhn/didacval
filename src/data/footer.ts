import { siteData } from "./site";

// El footer no repite teléfono, dirección ni correo: los toma de site.ts, que
// es la fuente única. Aquí sólo vive lo que es propio del pie: textos y qué
// enlaces se listan en cada columna.
export const footerData = {
  brand: {
    name: siteData.brand.name,
    description: "Psicólogo en Zaragoza. Terapia presencial y online.",
    status: "Agenda abierta",
  },
  contact: {
    title: "Ubicación & Contacto",
    address: [siteData.contact.address.street, siteData.contact.address.city],
    phone: siteData.contact.phone,
    email: siteData.contact.email,
  },
  links: {
    title: "Áreas de trabajo",
    // Cada área apunta a su propia página interior. Antes todas iban a
    // "#areas-clinicas" en la home.
    items: [
      {
        label: "Ansiedad y estrés",
        href: "/psicologo-ansiedad-zaragoza/",
      },
      { label: "Sexología", href: "/sexologo-zaragoza/" },
      {
        label: "Terapia individual",
        href: "/terapia-adultos-zaragoza/",
      },
      {
        label: "Adolescentes y familia",
        href: "/terapia-familiar-zaragoza/",
      },
      { label: "Sobre mí", href: siteData.nav[4].href },
      { label: "Contacto", href: siteData.nav[5].href },
    ],
  },
  legal: {
    title: "Colegiación & Registro",
    collegiate: [
      `Col. Nº ${siteData.credentials.collegiate}`,
      siteData.credentials.college,
    ],
    // Ranura del registro sanitario: hoy vacía a propósito. Se quitó
    // "Centro Sanitario Autorizado" sin sustituirlo (DESIGN_SPEC.md §13, paso 6)
    // porque faltaba el nº de registro que lo respalda. `Footer.astro` la pinta
    // sólo si existe: cuando la haya, se escribe aquí y sale sola.
    note: undefined as string | undefined,
  },
  bottom: {
    links: [
      siteData.legal.notice,
      siteData.legal.privacy,
      siteData.legal.cookies,
    ],
  },
} as const;