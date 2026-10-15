import { siteData } from "./site";

type JsonLdNode = Record<string, unknown>;

/**
 * Nodos de datos estructurados compartidos por todas las páginas.
 *
 * Se construyen aquí y no en cada página porque el bloque `LocalBusiness` tiene
 * que ser idéntico en todo el sitio: si el teléfono, el horario o la dirección
 * cambian en site.ts, cambia en las nueve páginas a la vez y no hay ninguna que
 * se quede desfasada.
 */

/** Ficha del negocio: nombre, dirección, teléfono, horario y zona de influencia. */
export const localBusiness = (url: string): JsonLdNode => ({
  "@type": ["MedicalBusiness", "Psychologist"],
  "@id": `${url}#localbusiness`,
  name: `${siteData.brand.fullName} · Psicólogo en Zaragoza`,
  description:
    "Psicología sanitaria en Zaragoza. Ansiedad y estrés, sexología, terapia individual y trabajo con adolescentes y familia. Consulta presencial y sesiones online.",
  url,
  telephone: siteData.contact.phone.href,
  email: siteData.contact.email.label,
  image: `${url}favicon.png`,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteData.contact.address.street,
    addressLocality: siteData.contact.address.locality,
    addressRegion: siteData.contact.address.region,
    postalCode: siteData.contact.address.postalCode,
    addressCountry: siteData.contact.address.country,
  },
  areaServed: [
    { "@type": "City", name: "Zaragoza" },
    { "@type": "AdministrativeArea", name: "Aragón" },
    { "@type": "Country", name: "España" },
  ],
  openingHours: siteData.contact.hours.schema,
  availableLanguage: "es",
  // La colegiación es el dato que distingue a un profesional sanitario de una
  // clínica genérica en los resultados de Google.
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Colegiación profesional",
    identifier: `A-${siteData.credentials.collegiate}`,
    recognizedBy: { "@type": "Organization", name: siteData.credentials.college },
  },
  medicalSpecialty: [
    "Psychiatric",
    "MentalHealth",
    "SexTherapy",
  ],
});

export interface Crumb {
  label: string;
  href: string;
}

/** Migas de pan en formato schema.org. `items` incluye la página actual. */
export const breadcrumbList = (items: readonly Crumb[]): JsonLdNode => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: new URL(item.href, siteData.url).href,
  })),
});

export interface FaqEntry {
  question: string;
  answer: string;
}

/**
 * FAQPage. El texto debe coincidir exactamente con el visible: Google coteja
 * ambos, y si divergen descarta el marcado. Se pasa el mismo array que pinta el
 * acordeón, así que no hay forma de que se desincronicen.
 */
export const faqPage = (items: readonly FaqEntry[]): JsonLdNode => ({
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

/** Ficha de persona para /quien-soy/. */
export const person = (url: string): JsonLdNode => ({
  "@type": "Person",
  "@id": `${url}#person`,
  name: siteData.brand.fullName,
  jobTitle: "Psicólogo",
  description:
    "Psicólogo colegiado en Zaragoza. Trabajo ansiedad y estrés, sexología, terapia individual y Adolescents y familia.",
  url: `${url}quien-soy/`,
  image: `${url}favicon.png`,
  telephone: siteData.contact.phone.href,
  email: siteData.contact.email.label,
  worksFor: { "@id": `${url}#localbusiness` },
  address: {
    "@type": "PostalAddress",
    addressLocality: siteData.contact.address.locality,
    addressCountry: siteData.contact.address.country,
  },
  knowsLanguage: "es",
  memberOf: { "@type": "Organization", name: siteData.credentials.college },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Colegiación profesional",
      identifier: `A-${siteData.credentials.collegiate}`,
      recognizedBy: { "@type": "Organization", name: siteData.credentials.college },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Grado en Psicología",
      recognizedBy: { "@type": "CollegeOrUniversity", name: "UNED" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Máster Universitario en Psicología General Sanitaria",
      recognizedBy: {
        "@type": "CollegeOrUniversity",
        name: "Universidad Europea de Valencia",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Especialista en Terapia Sexual y Sexología Clínica",
      recognizedBy: { "@type": "Organization", name: "AEPSIS" },
    },
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "UNED" },
    {
      "@type": "CollegeOrUniversity",
      name: "Universidad Europea de Valencia",
    },
  ],
});