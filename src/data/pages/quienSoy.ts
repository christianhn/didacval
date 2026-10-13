import didacImg from "../../assets/perfil/didac2.png";
import { siteData } from "../site";
import type { PageContent } from "./types";

export const quienSoyPage: PageContent = {
  path: "/quien-soy/",
  slug: "quien-soy",

  seo: {
    title: "Didac Val Capdevila, psicólogo en Zaragoza | Quién soy",
    description:
      "Conoce a Didac Val Capdevila, psicólogo colegiado A-03214 en Zaragoza: formación, forma de trabajar y cómo es la consulta.",
  },

  hero: {
    eyebrow: `Psicólogo en Zaragoza · Col. ${siteData.credentials.collegiate}`,
    title: siteData.brand.fullName,
    subtitle: "De las personas me gusta cuidar.",
    image: didacImg,
    imageAlt: "Didac Val Capdevila, psicólogo en Zaragoza",
    breadcrumbLabel: "Quién soy",
  },

  blocks: [
    {
      kind: "text",
      data: {
        id: "mi-historia",
        eyebrow: "Mi historia",
        title: "Una frase del colegio que me acompaña desde entonces",
        paragraphs: [
          "De pequeño, en el colegio, nos pidieron escribir una frase con nuestro nombre. La mía fue «Soy Didac y de las personas me gusta cuidar». Entonces no sabía que esa palabra me acompañaría siempre.",
          "Cada uno es protagonista de su historia, y hay otros personajes que ayudan a escribirla. ¿Me dejas formar parte de la tuya?",
        ],
        layout: "aside",
        tone: "bone",
        // TODO confirmar con Didac: el tono de la anécdota. La versión antigua
        // jugaba con la rima entre su nombre y la palabra "cuidar"; aquí se ha
        // quitado porque no se sostiene, pero hay que validar que la versión
        // corta le representa igual.
      },
    },

    {
      kind: "rows-legacy",
      data: {
        id: "como-trabajo",
        eyebrow: "Cómo trabajo",
        title: "Tres cosas que puedes esperar de mí",
        variant: "panel",
        items: [
          {
            icon: "psychology",
            kicker: "El enfoque",
            title: "Cognitivo-conductual y humanista, adaptado a ti",
            bullets: [
              "No aplico el mismo protocolo a todo el mundo",
              "El punto de partida es tu caso, no un manual",
            ],
          },
          {
            icon: "route",
            kicker: "El plan",
            title: "Claro desde el principio",
            bullets: [
              "Qué te trae, qué vamos a trabajar",
              "Cómo revisamos los avances",
            ],
          },
          {
            icon: "emoji_people",
            kicker: "El objetivo",
            title: "Que tengas herramientas para afrontarlo por tu cuenta",
            bullets: [
              "No se trata de depender de la sesión",
              "Se trata de entenderte y de poder aplicarlo por tu cuenta",
            ],
          },
        ],
      },
    },

    {
      kind: "split-legacy",
      data: {
        id: "la-consulta",
        eyebrow: "La consulta",
        title: "Un espacio tranquilo para hablar de lo que sea",
        paragraphs: [
          "Atiendo en Paseo de Sagasta 17, entresuelo izquierda (Zaragoza), y también online en toda España. Las sesiones son individuales y duran una hora.",
        ],
        image: didacImg,
        imageAlt: "Didac Val en la consulta de Paseo de Sagasta 17",
        tone: "soft",
        // TODO confirmar con Didac: la duración de la sesión (aquí se pone una
        // hora de forma provisional; la web antigua hablaba de 50 minutos).
      },
    },

    {
      kind: "formation",
      data: {
        id: "formacion",
        eyebrow: "Formación",
        title: "Lo que he estudiado para poder hacerlo",
        description:
          "Formación reglada en psicología, especialización en sexología clínica y formación específica en familias, mediación y educación afectivo-sexual.",
        groups: [
          {
            title: "Base",
            institutions: ["UNED", "Universidad Europea de Valencia"],
            items: [
              "Grado en Psicología · UNED",
              "Máster Universitario en Psicología General Sanitaria · Universidad Europea de Valencia",
            ],
          },
          {
            title: "Especialización clínica",
            items: [
              "Especialista en Terapia Sexual y Sexología Clínica · AEPSIS",
              "Curso superior en Trastornos de Personalidad",
              "Experto en intervención psicosocial en infancia, familias y adolescencia · Instituto SIAC",
              "Curso superior de Mediación civil, mercantil y familiar · Talentia Formación",
              "Inteligencia emocional: recursos y técnicas · Instituto SIAC",
              "Mediador/a en Educación Afectivo-Sexual · Instituto SIAC",
            ],
          },
          {
            title: "Educación y adolescencia",
            institutions: ["Edutopía Formación"],
            items: [
              "Mediación en el ámbito escolar",
              "Bullying y convivencia escolar",
              "TDAH",
              "Trastornos del espectro autista",
              "Dislexia",
              "Altas capacidades",
              "Diseño Universal para el Aprendizaje",
            ],
          },
        ],
      },
    },

    {
      kind: "text",
      data: {
        id: "datos-profesionales",
        eyebrow: "Datos profesionales",
        title: "Colegiación y registro",
        paragraphs: [
          `Col. Nº ${siteData.credentials.collegiate} · ${siteData.credentials.college}`,
          `${siteData.credentials.sanitaryRegistry}.`,
        ],
        bullets: [
          `Consulta en ${siteData.contact.address.street}, ${siteData.contact.address.city}`,
          `${siteData.contact.hours.summary}`,
          "Sesiones online en toda España",
        ],
        tone: "canvas",
        // TODO confirmar con Didac: el nº de registro sanitario que respalda
        // "Centro Sanitario Autorizado". La web antigua lo publicaba sin el
        // número; aquí tampoco se inventa uno.
      },
    },

    {
      kind: "cta",
      data: {
        title: "¿Hablamos?",
        description:
          "La primera sesión informativa es gratuita y sin compromiso. Sirve para que los dos veamos si tiene sentido seguir.",
      },
    },
  ],

  // TODO confirmar con Didac:
  // - Año de termine y años de ejercicio: no se publican porque no están
  //   confirmados.
  // - Todos los títulos de la formación vienen de la web antigua: revisar uno
  //   a uno que sigan vigentes y que las entidades formadoras se llamen así.
};