import parejaImg from "../../assets/speciality/pareja.jpg";
import type { PageContent } from "./types";

export const sexologiaPage: PageContent = {
  path: "/sexologo-zaragoza/",
  slug: "sexologia",

  seo: {
    title: "Sexólogo en Zaragoza | Disfunción eréctil y eyaculación precoz",
    description:
      "Dificultades sexuales de origen psicológico: disfunción eréctil, eyaculación precoz, bajo deseo. Sexólogo en Zaragoza, atención confidencial presencial y online.",
  },

  hero: {
    eyebrow: "Sexología",
    title: "Sexólogo en Zaragoza",
    subtitle: "Un espacio confidencial para hablar de lo que cuesta nombrar.",
    image: parejaImg,
    imageAlt: "Dos personas hablando en un ambiente tranquilo y privado",
    breadcrumbLabel: "Sexología",
  },

  blocks: [
    {
      kind: "text",
      data: {
        id: "intro",
        title: "Lo que casi nadie cuenta",
        paragraphs: [
          "Las dificultades sexuales generan angustia, inseguridad y vergüenza, y muchas veces se viven en silencio durante años antes de pedir ayuda.",
          "Aquí puedes hablarlo con naturalidad, sin juicios y con total discreción.",
        ],
        layout: "aside",
        tone: "bone",
      },
    },

    {
      kind: "rows",
      data: {
        id: "que-trabajo",
        eyebrow: "Qué dificultades trabajo",
        title: "Las que más se ven en consulta",
        description:
          "Todas se abordan desde su origen psicológico, que es el que más depende de lo que pasa por tu cabeza y no sólo de tu cuerpo.",
        variant: "panel",
        items: [
          {
            icon: "favorite",
            kicker: "Lo más habitual",
            title: "Dificultades de la respuesta sexual",
            bullets: [
              "Disfunción eréctil de origen psicológico",
              "Ansiedad de rendimiento",
              "Eyaculación precoz",
              "Bajo deseo",
            ],
          },
          {
            icon: "volunteer_activism",
            kicker: "En la relación",
            title: "Cuando el problema es de los dos",
            bullets: [
              "Bloqueos o insatisfacción en la intimidad",
              "Inseguridad en la vida sexual o en la pareja",
            ],
            // TODO confirmar con Didac: la página antigua de sexología sólo
            // hablaba de sexología masculina, mientras que la de terapia para
            // adultos menciona dolor e insatisfacción. Aquí se incluyen ambas,
            // que es lo que sugiere la landing. Si sólo atiende a hombres,
            // quitar esta fila.
          },
        ],
      },
    },

    {
      kind: "text",
      data: {
        id: "por-que-aparecen",
        eyebrow: "Por qué aparecen",
        title: "El cuerpo responde a lo que pasa por la cabeza",
        paragraphs: [
          "La ansiedad, la presión por el rendimiento, experiencias previas, conflictos internos o dificultades en la relación pueden influir directamente en la respuesta sexual. Y también pasa lo contrario: cuando algo no funciona, acaba pesando en cómo se vive la relación entera.",
        ],
        footnote:
          "Si hay una posible causa física, te lo comento y te animo a consultarlo con tu médico.",
        tone: "canvas",
      },
    },

    {
      kind: "rows",
      data: {
        id: "confidencialidad",
        eyebrow: "Confidencialidad",
        title: "Secreto profesional, siempre",
        description:
          "Lo que cuentas en consulta no sale de consulta. Estoy colegiado en el Colegio Oficial de Psicología de Aragón y el Código Deontológico me obliga a guardarlo.",
        variant: "full",
        items: [
          {
            title: "Discreción total",
            subtitle:
              "No comparto nada con nadie sin tu permiso, tampoco con tu pareja.",
          },
          {
            title: "Sesiones online disponibles",
            subtitle:
              "Por videollamada, con la misma reserva que en la consulta.",
          },
        ],
      },
    },

    {
      kind: "text",
      data: {
        id: "que-esperar",
        eyebrow: "Qué esperar",
        title: "A tu ritmo y sin prisas",
        paragraphs: [
          "No hay un guion cerrado. Estas son las tres cosas que suelen pasar en consulta:",
        ],
        bullets: [
          "Hablamos de tu situación con calma.",
          "Entendemos qué la mantiene.",
          "Trabajamos con estrategias concretas, a tu ritmo.",
        ],
        link: {
          label: "Ver las cuatro fases del proceso",
          href: "/#proceso",
        },
        tone: "bone",
      },
    },

    {
      kind: "faq",
      data: {
        id: "faq",
        eyebrow: "Preguntas frecuentes",
        title: "Dudas frecuentes",
        description:
          "Las preguntas que más me llegan a la primera sesión, respondidas con la misma franqueza con la que las hablamos en consulta.",
        // TODO confirmar con Didac: la redacción es propuesta. Sobre todo "¿Cómo
        // sé si el origen es físico o psicológico?", que tiene una respuesta
        // clínica que debe ser la suya.
        items: [
          {
            question: "¿Es normal tener estas dificultades?",
            answer:
              "Mucho más de lo que parece. La disfunción eréctil y la eyaculación precoz son los motivos de consulta más frecuentes en sexología, y detrás casi siempre hay ansiedad, presión o experiencias pasadas. No son un defecto: son una señal de que algo necesita atención.",
          },
          {
            question: "¿Puedo ir solo o tiene que venir mi pareja?",
            answer:
              "Puedes ir solo, y es lo más habitual. El trabajo se empieza a nivel individual y, si tiene sentido, la pareja se incorpora después con el consentimiento de los dos.",
          },
          {
            question: "¿Cómo sé si el origen es físico o psicológico?",
            answer:
              "Hay señales que apuntan a cada caso y en consulta las revisamos. Si veo una posible causa física te lo digo y te animo a consultarlo con tu médico. Y si es psicológica, también te lo diré con la misma claridad.",
          },
          {
            question: "¿Se puede hacer online?",
            answer:
              "Sí. La modalidad online es igual de válida y mantiene la misma confidencialidad. Además, puedes hacerla desde donde te resulte más cómodo.",
          },
          {
            question: "¿Cuántas sesiones hacen falta?",
            answer:
              "Depende de cada caso. Lo habitual es empezar con sesiones semanales y, según cómo evolucione, espaciarlas. No se continúa más allá de lo que te esté sirviendo.",
          },
        ],
      },
    },

    {
      kind: "cta",
      data: {
        title: "Lo que cuesta nombrar, se puede trabajar",
        description:
          "Una primera sesión informativa, gratuita y confidencial, para entenderlo sin compromiso.",
      },
    },
  ],

  // TODO confirmar con Didac:
  // - Alcance real de la sexología: ¿sólo hombres, también mujeres y parejas?
  // - Si mantiene la línea de la web antigua sobre parafilias que generan
  //   malestar, no se ha incluido por prudencia. Si se mantiene, redactarla con
  //   sobriedad en una sola frase.
  // - Denominación: la web antigua decía "sexólogo". Ver la nota 2 del encargo
  //   sobre el uso de la palabra "especialista".
};