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
    // El subtítulo absorbe lo que era la sección de introducción: si el hero
    // no dice de qué va la terapia, la primera sección arranca con un titular
    // que no tiene nada que sostener.
    subtitle:
      "Un espacio para entender qué está pasando en casa y recuperar el diálogo entre padres e hijos, sin buscar culpables.",
    image: familyImg,
    imageAlt: "Una familia con su bebé pasando tiempo junta",
    breadcrumbLabel: "Terapia familiar y adolescentes",
  },

  blocks: [
    // ---- 1. Contenedor beige redondeado (una sola vez por página) --------
    {
      kind: "rows",
      data: {
        id: "cuando-puede-ayudar",
        eyebrow: "¿Cuándo puede ayudar?",
        title: "Cuando el diálogo en casa se ha roto",
        description:
          "No hace falta esperar a que la situación sea grave: si la incomprensión se repite, pedir ayuda pronto suele ahorrar meses.",
        items: [
          {
            icon: "forum",
            kicker: "Entre padres e hijos",
            title: "Conflictos que siempre acaban igual",
            bullets: [
              "Discusiones que terminan en la misma discusión",
              "Órdenes que no se cumplen",
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
            href: serviceRoutes.ansiedad.path,
            ctaLabel: serviceRoutes.ansiedad.label,
            bullets: [
              "Ataques de pánico o miedo constante",
              "Insomnio y agotamiento",
            ],
          },
          {
            icon: "diversity_3",
            kicker: "Cambios de estructura",
            title: "Crisis o cambios familiares",
            bullets: [
              "Separaciones y nuevas estructuras",
              "Mudanzas, losses y duelos",
            ],
          },
        ],
      },
    },

    // ---- 2. Secuencia numerada -------------------------------------------
    {
      kind: "steps",
      data: {
        id: "como-trabajamos",
        eyebrow: "Cómo trabajamos",
        title: "Cómo trabajamos con tu familia",
        description:
          "No buscamos culpables: buscamos entender cómo se han construido ciertos patrones y encontrar otras formas de convivir.",
        tone: "base",
        steps: [
          {
            number: "01",
            kicker: "Empezar",
            title: "Identificar el origen",
            description:
              "Cada conflicto repetido tiene una historia detrás. El primer paso es entender qué lo alimenta y qué lo mantiene.",
          },
          {
            number: "02",
            kicker: "En medio",
            title: "Mejorar el diálogo",
            description:
              "Cambiar la forma de hablarse dentro de casa es lo que abre la puerta: los acuerdos duran cuando se sostienen entre todos.",
          },
          {
            number: "03",
            kicker: "Después",
            title: "Fortalecer los vínculos",
            description:
              "Lo que se trabaja termina marcando cómo se relaciona la familia, también cuando la terapia ya ha terminado.",
          },
        ],
      },
    },

    // ---- 3. Dos columnas -------------------------------------------------
    // Sin imagen: `family.jpg` es la del hero y repetirla dentro de la misma
    // página es justo lo que hace que una sección parezca un relleno. Con dos
    // columnas de texto el bloque mantiene el peso que pide un H2 de la escala.
    {
      kind: "split",
      data: {
        id: "con-adolescentes",
        eyebrow: "Con adolescentes",
        title: "Trabajo individual y familiar, según el caso",
        description:
          "Cuando tiene sentido, combino sesiones individuales con sesiones familiares. No es un protocolo cerrado: se decide en la primera sesión.",
        link: {
          label: "Ver también orientación académica",
          href: "/#areas-clinicas",
        },
        tone: "soft",
        lead: [
          "El adolescente necesita un espacio que no dependa de la autorización de sus padres para ser escuchado. Por eso el trabajo individual suele ir por delante: es la vía para que pueda decir lo que no dice en casa.",
        ],
        column: {
          kicker: "Confidencialidad",
          title: "Lo que cuenta se trata como cualquier otro contenido de consulta",
          paragraphs: [
            "Se explica siempre antes de empezar, con el adolescente delante. Los padres reciben información sobre el proceso y el objetivo, nunca el detalle de lo que se ha contado.",
            // TODO confirmar con Didac: el protocolo real de confidencialidad
            //   con menores y qué se comparte con los padres. Es también la
            //   respuesta a una de las preguntas de la FAQ de abajo.
          ],
        },
      },
    },

    // ---- 4. FAQ -----------------------------------------------------------
    {
      kind: "faq",
      data: {
        id: "faq",
        eyebrow: "Preguntas frecuentes",
        title: "Dudas de las familias",
        description:
          "Las preguntas que más se repiten en la primera sesión con padres y adolescentes.",
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
  ],

  // La banda de CTA que cerraba la página antes ("Recuperar el diálogo es
  // posible") ya no existe: el CTA está en el hero y en el formulario, que es lo
  // único que debe empujar a la conversión. La sección de orientación académica
  // también: vive en la landing y aquí queda un enlace en la cabecera de
  // "Con adolescentes".

  // TODO confirmar con Didac:
  // - Protocolo de confidencialidad con menores y qué se comparte con los padres.
};
