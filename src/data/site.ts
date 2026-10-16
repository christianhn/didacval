import logo from "../assets/brand/favicon.svg";

// TODO con Didac: confirmar que el número tiene WhatsApp Business y que quiere
// usarlo como canal de contacto público antes de publicar el enlace de wa.me.
const PHONE_E164 = "34622588560";
const PHONE_READABLE = "+34 622 58 85 60";

export const siteData = {
  // Origen público del sitio. Lo consume Layout (canonical/OG) y el sitemap,
  // además de `site` en astro.config.mjs: si cambia el dominio hay que tocar
  // las dos cosas.
  url: "https://didacval.vercel.app",

  brand: {
    name: "didac val",
    fullName: "Didac Val Capdevila",
    role: "Psicólogo en Zaragoza",
    logo,
    logoAlt: "Didac Val, psicólogo en Zaragoza",
  },

  // ---------------------------------------------------------------- contacto
  // Fuente única: footer.ts y cualquier subpágina importan de aquí. Ningún
  // teléfono, correo o dirección se escribe a mano en un .astro.
  contact: {
    address: {
      street: "Paseo de Sagasta 17, entresuelo izquierda",
      city: "50008 Zaragoza",
      // TODO con Didac: confirmar la planta exacta. La web antigua
      // (didacvalpsicologo.es) decía "entresuelo izquierda" y aquí aparecía
      // "Principal". Hasta que lo confirme, todas las variantes de la web usan
      // "entresuelo izquierda".
      locality: "Zaragoza",
      region: "Aragón",
      postalCode: "50008",
      country: "ES",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Paseo+de+Sagasta+17+Zaragoza",
      mapsLabel: "Cómo llegar",
    },
    phone: {
      label: PHONE_READABLE,
      href: `tel:+${PHONE_E164}`,
      // Versión agrupada para(meta description y textos largos.
      spaced: "622 58 85 60",
      whatsapp: `https://wa.me/${PHONE_E164}`,
    },
    email: {
      label: "didacvalpsicologia@gmail.com",
      href: "mailto:didacvalpsicologia@gmail.com",
    },
    hours: {
      label: "L-V 9:00 - 20:00",
      // Formato schema.org para el JSON-LD.
      schema: ["Mo-Fr 09:00-20:00"],
      summary: "Atención L-V 9:00 - 20:00",
    },
    responseTime: "Te respondo en menos de 24 horas laborables.",
    modalities: [
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

  // ------------------------------------------------------- colegiación
  credentials: {
    collegiate: "A-03214",
    college: "Colegio Oficial de Psicología de Aragón",
  },

  // ------------------------------------------------------------ navegación
  nav: [
    { label: "Inicio", href: "/", path: "inicio" },
    {
      label: "Especialidades",
      href: "#areas-clinicas",
      path: "especialidades",
      children: [
        {
          label: "Ansiedad y estrés",
          href: "/psicologo-ansiedad-zaragoza/",
          path: "especialidades/ansiedad",
        },
        {
          label: "Sexología",
          href: "/sexologo-zaragoza/",
          path: "especialidades/sexologia",
        },
        {
          label: "Terapia para adultos",
          href: "/terapia-adultos-zaragoza/",
          path: "especialidades/adultos",
        },
        {
          label: "Terapia familiar y adolescentes",
          href: "/terapia-familiar-zaragoza/",
          path: "especialidades/familiar",
        },
      ],
    },
    { label: "El proceso", href: "#proceso", path: "proceso" },
    { label: "Preguntas frecuentes", href: "#faq", path: "preguntas-frecuentes" },
    { label: "Sobre mí", href: "/quien-soy/", path: "sobre-mi" },
    { label: "Contacto", href: "/contacto/", path: "contacto" },
  ],

  cta: {
    label: "Primera sesión gratuita",
    href: "#contacto-cita",
    path: "primera-consulta",
  },

  // Menú lateral de móvil. El CTA de escritorio se traslada aquí dentro: en
  // móvil el header solo lleva marca + disparador.
  menu: {
    triggerLabel: "Menu",
    closeLabel: "Cerrar menú",
    eyebrow: "Navegación",
    specialtiesLabel: "Especialidades",
  },

  legal: {
    // Contenido provisional pendiente de revisión legal (ver src/data/legal.ts).
    notice: { label: "Aviso Legal", href: "/aviso-legal/" },
    privacy: { label: "Política de Privacidad", href: "/politica-privacidad/" },
    cookies: { label: "Cookies", href: "/cookies/" },
  },
} as const;

// ------------------------------------------------------ helper de navegación

/**
 * Resuelve un href de navegación para la página actual.
 *
 * Las anclas de la landing ("#proceso") no existen en una subpágina: si se
 * dejaran tal cual, el navegador buscaría un elemento con ese id dentro de la
 * subpágina, no lo encontraría y no movería nada. Prefijar "/" las convierte en
 * enlaces que vuelven a la home y saltan a la sección correcta.
 */
export const resolveNavHref = (href: string, isHome: boolean): string => {
  if (isHome || !href.startsWith("#")) return href;
  return `/${href}`;
};

/** Normaliza una ruta a la forma "/algo/" para poder comparar con pathname. */
export const normalizePath = (pathname: string): string => {
  if (pathname === "/" || pathname === "") return "/";
  const trimmed = pathname.replace(/\/+$/, "");
  return `${trimmed}/`;
};

/**
 * Marca activo el enlace de navegación correspondiente a la ruta actual.
 * Sólo se comparan entradas de ruta real: las anclas (#proceso, #faq) nunca
 * están activas, porque corresponden a secciones de la home.
 */
export const isActiveNavItem = (
  item: { href: string; children?: readonly { href: string }[] },
  pathname: string,
): boolean => {
  const current = normalizePath(pathname);

  if (item.children) {
    return item.children.some((child) => normalizePath(child.href) === current);
  }

  if (item.href.startsWith("#")) return false;

  return normalizePath(item.href) === current;
};

/** Marca activo un hijo del desplegable de especialidades. */
export const isActiveNavChild = (href: string, pathname: string): boolean =>
  !href.startsWith("#") && normalizePath(href) === normalizePath(pathname);