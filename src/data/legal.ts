import { siteData } from "./site";

export interface LegalSection {
  heading: string;
  paragraphs: readonly string[];
  list?: readonly string[];
}

export interface LegalPage {
  path: string;
  slug: string;
  seo: {
    title: string;
    description: string;
  };
  /** Etiqueta sobre el H1. Sólo si dice algo que el titular no dice. */
  eyebrow?: string;
  title: string;
  updated: string;
  /** Aviso visible en la parte superior de las tres páginas. */
  provisional: string;
  sections: readonly LegalSection[];
}

// TODO IMPORTANTE con Didac y con su asesor legal: los tres textos de abajo son
// una base provisional redactada para que la web no tenga enlaces a "#", NO son
// textos legales revisados. Hay que sustituirlos por los definitivos antes de
// publicar: el RGPD obliga a identificar al responsable, los plazos de
// conservación, las transferencias y los derechos de forma concreta.
const provisionalNotice =
  "Texto provisional pendiente de revisión jurídica. Sustituir por la versión definitiva antes de publicar.";

const commonSections: readonly LegalSection[] = [
  {
    heading: "Quién es el responsable del tratamiento",
    paragraphs: [
      `${siteData.brand.fullName}, psicólogo colegiado nº ${siteData.credentials.collegiate} del ${siteData.credentials.college}, con domicilio profesional en ${siteData.contact.address.street}, ${siteData.contact.address.city}.`,
      `Para cualquier cuestión relacionada con esta web o con los datos que en ella se recoges, puedes escribir a ${siteData.contact.email.label} o llamar al ${siteData.contact.phone.label}.`,
    ],
  },
];

export const avisoLegal = {
  path: "/aviso-legal/",
  slug: "aviso-legal",
  seo: {
    title: "Aviso Legal | Didac Val, psicólogo en Zaragoza",
    description:
      "Aviso legal de la web de Didac Val, psicólogo colegiado A-03214 en Zaragoza. Información legal, propiedad intelectual y condiciones de uso.",
  },
  title: "Aviso legal",
  updated: "Última actualización: pendiente de fijar la fecha de publicación",
  provisional: provisionalNotice,
  sections: [
    ...commonSections,
    {
      heading: "Titularidad del sitio",
      paragraphs: [
        "Este sitio web está titularidad de un profesional sanitario Colegiado en el Colegio Oficial de Psicología de Aragón, que ejerce la actividad tanto en consulta presencial como en modalidad online.",
      ],
    },
    {
      heading: "Condiciones de uso",
      paragraphs: [
        "El contenido de este sitio tiene carácter informativo y no constituye una consulta, un diagnóstico ni una relación clínica. Acudir al psicólogo requiere una valoración personal que sólo puede hacerse en sesión.",
        "Si estás en una situación de riesgo o de urgencia, no utilices este sitio: contacta con el 112, con una línea de atención a la salud mental de tu comunidad autónoma o con los servicios de urgencia de tu zona.",
      ],
    },
    {
      heading: "Propiedad intelectual",
      paragraphs: [
        "Los textos, el diseño y las imágenes de este sitio son propiedad de su titular o se utilizan con autorización. Queda prohibida su reproducción total o parcial sin autorización previa por escrito.",
      ],
    },
    {
      heading: "Enlaces a terceros",
      paragraphs: [
        "Los enlaces a páginas de terceros se ofrecen sólo como ayuda. No respondo de su contenido, que puede haber cambiado desde su publicación.",
      ],
    },
  ],
} satisfies LegalPage;

export const politicaPrivacidad = {
  path: "/politica-privacidad/",
  slug: "politica-privacidad",
  seo: {
    title: "Política de Privacidad | Didac Val, psicólogo en Zaragoza",
    description:
      "Política de privacidad de la web de Didac Val: qué datos se recogen a través del formulario, con qué finalidad, cuánto tiempo se conservan y cómo ejercer tus derechos.",
  },
  title: "Política de privacidad",
  updated: "Última actualización: pendiente de fijar la fecha de publicación",
  provisional: provisionalNotice,
  sections: [
    ...commonSections,
    {
      heading: "Qué datos se recogen",
      paragraphs: [
        "Esta web no tiene registro de usuarios ni acceso con clave: sólo se piden datos a través del formulario de contacto.",
      ],
      list: [
        "Nombre.",
        "Correo electrónico.",
        "Teléfono.",
        "Modalidad elegida (presencial u online).",
        "Motivo de consulta, si lo escribes (opcional).",
        "Página desde la que se envía el formulario.",
      ],
    },
    {
      heading: "Para qué se utilizan",
      paragraphs: [
        "Los datos se usan únicamente para responder a tu consulta y, si das el visto bueno, para gestionar las citas y la relación clínica posterior. La base jurídica es tu consentimiento y, cuando proceda, la aplicación de medidas de atención sanitaria.",
      ],
    },
    {
      heading: "Cuánto tiempo se conservan",
      paragraphs: [
        "Los datos de una consulta que no llega a convertirse en relación clínica se conservan el tiempo necesario para atenderla. Los datos clínicos de pacientes se conservan durante los plazos que exige la ley, aunque el tratamiento se retire.",
      ],
    },
    {
      heading: "Con quién se comparten",
      paragraphs: [
        "No se ceden datos a terceros con fines comerciales ni publicitarios. Si hace falta la intervención de otro profesional (médico, psiquiatra, derivación), se hace con tu consentimiento y sólo con la información estrictamente necesaria.",
      ],
    },
    {
      heading: "Tus derechos",
      paragraphs: [
        "Puedes solicitar el acceso, la rectificación, la supresión, la limitación o la portabilidad de tus datos escribiendo al correo de contacto, y presentar una reclamación ante la Agencia Española de Protección de Datos.",
      ],
    },
    {
      heading: "Seguridad",
      paragraphs: [
        "Los datos viajan por conexión cifrada (HTTPS). Aun así, ningún sistema es infalible: si estimas que has detectado un problema de seguridad, escríbeme y lo revisamos.",
      ],
    },
  ],
} satisfies LegalPage;

export const cookies = {
  path: "/cookies/",
  slug: "cookies",
  seo: {
    title: "Política de Cookies | Didac Val, psicólogo en Zaragoza",
    description:
      "Cookies de la web de Didac Val: esta web no utiliza cookies publicitarias ni de seguimiento, por lo que no instala banner de consentimiento.",
  },
  title: "Cookies",
  updated: "Última actualización: pendiente de fijar la fecha de publicación",
  provisional: provisionalNotice,
  sections: [
    ...commonSections,
    {
      heading: "Qué cookies usa esta web",
      paragraphs: [
        "En su estado actual, esta web no instala cookies de seguimiento, publicitarias ni de perfilado, y por eso no muestra banner de consentimiento.",
        "Puede usar almacenamiento local del navegador (localStorage y sessionStorage) únicamente para preferencias técnicas de la interfaz, que no permiten identificarte ni seguir tu navegación.",
      ],
    },
    {
      heading: "Analítica",
      paragraphs: [
        "Si se incorpora una herramienta de analítica, se configurará en modo sin cookies y sin recoger información personal. Este punto debe revisarse en el momento de instalar esa herramienta.",
      ],
    },
    {
      heading: "Cómo gérer las cookies",
      paragraphs: [
        "Puedes bloquear o eliminar las cookies desde los ajustes de tu navegador. Ten en cuenta que puede affectar al funcionamiento de otras webs.",
      ],
    },
  ],
} satisfies LegalPage;