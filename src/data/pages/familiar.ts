import familyImg from "../../assets/speciality/family.jpg";
import { serviceRoutes, type PageContent } from "./types";

export const familiarPage: PageContent = {
  path: "/terapia-familiar-zaragoza/",
  slug: "familiar",

  seo: {
    title: "Terapia familiar y adolescentes en Zaragoza | Didac Val",
    description:
      "Terapia familiar y con adolescentes en Zaragoza: mejora la comunicación y resuelve los conflictos en casa. Consulta en Paseo de Sagasta 17 y online.",
  },

  hero: {
    eyebrow: "Adolescentes y familia",
    title: "Terapia familiar y adolescentes en Zaragoza",
    subtitle: "Recuperar el diálogo en casa, sin buscar culpables.",
    image: familyImg,
    imageAlt: "Conversación tranquila entre dos personas de la misma familia",
    breadcrumbLabel: "Terapia familiar y adolescentes",
  },

  blocks: [
    {
      kind: "text",
      data: {
        id: "intro",
        title: "La adolescencia cambia la casa entera",
        paragraphs: [
          "La adolescencia es una etapa de cambios intensos que puede traer conflictos, incomprensión y tensión en casa. La terapia familiar ofrece un espacio para entender qué está pasando y mejorar la comunicación entre padres e hijos.",
        ],
        layout: "aside",
        tone: "bone",
      },
    },

    {
      kind: "rows",
      data: {
        id: "cuando-puede-ayudar",
        eyebrow: "¿Cuándo puede ayudar?",
        title: "Cuando el diálogo en casa se ha roto",
        description:
          "No hace falta esperar a que la situación sea grave para pedir ayuda: si la incomprensión se repite, pedir ayuda pronto suele ahorrar meses.",
        variant: "panel",
        items: [
          {
            icon: "forum",
            kicker: "En casa",
            title: "Conflictos frecuentes entre padres e hijos",
            bullets: [
              "Discusiones que acaban siempre igual",
              "Órdenes que no se cumplen y la casa se convierte en un campo de batalla",
              "Distancia afectiva en lugar de diálogo",
            ],
          },
          {
            icon: "sentiment_satisfied",
            kicker: "En el adolescente",
            title: "Cambios de conducta en la adolescencia",
            bullets: [
              "Cambios bruscos de humor o de rutina",
              "Problemas de estudios o de convivencia",
            ],
          },
          {
            icon: "psychology",
            kicker: "También puede ayudar",
            title: "Ansiedad o bajo estado de ánimo",
            subtitle:
              "Si lo principal es el malestar del adolescente, esa parte tiene su propia página.",
            href: serviceRoutes.ansiedad.path,
            ctaLabel: serviceRoutes.ansiedad.short,
          },
          {
            icon: "diversity_3",
            kicker: "Cambios de estructura",
            title: "Crisis o cambios familiares",
            bullets: [
              "Separaciones y nuevas estructuras familiares",
              "Mudanzas, losses y duelos en la familia",
            ],
          },
        ],
      },
    },

    {
      kind: "text",
      data: {
        id: "como-trabajamos",
        eyebrow: "Cómo trabajamos",
        title: "Tres cosas, en este orden",
        paragraphs: [
          "No buscamos culpables: buscamos entender cómo se han construido ciertos patrones y encontrar otras formas de convivir.",
        ],
        bullets: [
          "Identificar el origen del conflicto",
          "Mejorar los canales de diálogo",
          "Fortalecer los vínculos",
        ],
        tone: "canvas",
      },
    },

    {
      kind: "split",
      data: {
        id: "con-adolescentes",
        eyebrow: "Con adolescentes",
        title: "Trabajo individual y familiar, según el caso",
        paragraphs: [
          "Cuando tiene sentido, combino el trabajo individual con sesiones familiares: es la vía para que el adolescente se sienta escuchado de verdad, sin que su decisión dependa de que sus padres autoricen el tratamiento. La confidencialidad con menores es una parte más del trabajo, y se explica siempre antes de empezar.",
        ],
        image: familyImg,
        imageAlt: "Adolescente y adulto hablando en la consulta",
        tone: "soft",
        footnote:
          "Confidencialidad con menores: lo que cuenta el adolescente se trata con el mismo cuidado que cualquier otro contenido de consulta.",
        // TODO confirmar con Didac: el protocolo real de confidencialidad con
        // menores y qué se comparte con los padres. Es la respuesta a una de las
        // preguntas de las FAQ de abajo, y no debe publicarse sin su respuesta.
      },
    },

    {
      kind: "rows",
      data: {
        id: "orientacion-academica",
        eyebrow: "Además",
        title: "Orientación académica",
        description:
          "Otra de las áreas donde más se me pide ayuda: las decisiones de Bachillerato, Grados y Universidad.",
        variant: "full",
        items: [
          {
            icon: "compass",
            kicker: "Bachillerato",
            title: "Repasamos juntos tus opciones",
            bullets: [
              "Separamos lo que quieres de lo que se espera de ti",
              "Decides con más criterio y menos ruido",
            ],
          },
          {
            icon: "school",
            kicker: "Grados y Universidad",
            title: "Elegir carrera sin decidir en caliente",
            bullets: [
              "Qué te pide cada opción de verdad",
              "Cómo encaja con tus tiempos",
            ],
          },
        ],
        cta: {
          label: "Ver el bloque de la web principal",
          href: "/#areas-clinicas",
        },
      },
    },

    {
      kind: "faq",
      data: {
        id: "faq",
        eyebrow: "Preguntas frecuentes",
        title: "Dudas de las familias",
        description:
          "Las preguntas que más se repiten en la primera sesión con padres y adolescentes.",
        // TODO confirmar con Didac: la respuesta sobre qué se comparte con los
        //   padres debe ser la real, no una formulación genérica.
        items: [
          {
            question: "¿Tiene que venir toda la familia?",
            answer:
              "No necesariamente. Según el caso puede venir sólo el adolescente, uno de los padres o ambos. Lo decidimos en la primera sesión, según lo que sea más útil para el problema.",
          },
          {
            question: "Mi hijo no quiere venir, ¿qué hago?",
            answer:
              "Es muy habitual y no significa que la terapia no sirva. Se puede empezar trabajando con los padres, que suelen ser los que más cambian de forma. Cuando el adolescente ve que el espacio no va en contra suya, muchas veces se incorpora por su cuenta.",
          },
          {
            question: "¿Qué se comparte con los padres de lo que cuenta el adolescente?",
            answer:
              "Esto lo hablamos siempre antes de empezar, con el adolescente delante. El punto de partida es el secreto profesional: lo que cuenta se trata como cualquier otro contenido de consulta. Los padres reciben información sobre el proceso y el objetivo, no el detalle de lo que se ha contado.",
          },
          {
            question: "¿Cuánto dura el proceso?",
            answer:
              "Depende de cada caso. Lo habitual es empezar con sesiones semanales y espaciarlas después según cómo evolucione la relación en casa.",
          },
          {
            question: "¿Se puede hacer online?",
            answer:
              "Sí. Las sesiones familiares online funcionan bien cuando lo que hay que trabajar es la comunicación entre las personas que están en la misma casa: evitar los desplazamientos ya elimina una parte del conflicto.",
          },
        ],
      },
    },

    {
      kind: "cta",
      data: {
        title: "Recuperar el diálogo es posible",
        description:
          "Una primera sesión informativa, gratuita y sin compromiso, para entender qué está pasando y por dónde empezar.",
      },
    },
  ],

  // TODO confirmar con Didac:
  // - Protocolo de confidencialidad con menores y qué se comparte con los
  //   padres (afecta a la FAQ y al bloque "Con adolescentes").
  // - Confirmar el tono del bloque de orientación académica: aquí se ha
  //   mantenido la línea de la web antigua, sin copiar su maquetación.
};