import ansiedadImg from "../../assets/speciality/ansiedad.jpg";
import {
  formHref,
  phoneCta,
  primaryCta,
  processLink,
  serviceRoutes,
  type PageContent,
} from "./types";

export const ansiedadPage: PageContent = {
  path: "/psicologo-ansiedad-zaragoza/",
  slug: "ansiedad",

  seo: {
    title: "Psicólogo para la ansiedad en Zaragoza | Didac Val",
    description:
      "Terapia para la ansiedad y el estrés en Zaragoza: entiende qué te pasa y recupera la calma. Consulta en Paseo de Sagasta 17 y online. Primera sesión gratuita.",
  },

  hero: {
    eyebrow: "Ansiedad y estrés",
    title: "Psicólogo para la ansiedad en Zaragoza",
    subtitle: "Entender qué te pasa es el primer paso para recuperar la calma.",
    image: ansiedadImg,
    imageAlt:
      "Luz suave en una habitación tranquila: la ansiedad se nota en el cuerpo antes que en los pensamientos",
    breadcrumbLabel: "Ansiedad y estrés",
  },

  blocks: [
    // ------------------------------------------------------------- intro
    {
      kind: "text",
      data: {
        id: "intro",
        title: "Cuando la preocupación ya no se va de tu cabeza",
        paragraphs: [
          "La ansiedad puede sentirse como inquietud constante, insomnio, pensamientos que no se detienen, presión en el pecho o miedo a que algo malo ocurra. Si estás leyendo esto, probablemente notes que ya no puedes manejarlo como antes.",
          "Atiendo en Paseo de Sagasta 17 (Zaragoza) y también online.",
        ],
        layout: "aside",
        tone: "bone",
      },
    },

    // ------------------------------------------------- cómo se manifiesta
    {
      kind: "rows",
      data: {
        id: "como-se-manifiesta",
        eyebrow: "Cómo se manifiesta",
        title: "No siempre es fácil de distinguir",
        description:
          "Suele aparecer en dos sitios a la vez, y reconocerlos es el primer paso para poder trabajar sobre ellos.",
        variant: "panel",
        items: [
          {
            icon: "self_improvement",
            kicker: "En el cuerpo",
            title: "Lo que notas aunque no lo pienses",
            bullets: [
              "Tensión muscular, sobre todo mandíbula, cuello y hombros",
              "Opresión en el pecho o dificultad para respirar",
              "Problemas de sueño o despertares con sobresalto",
              "Cansancio persistente, aunque descanses",
            ],
          },
          {
            icon: "psychology",
            kicker: "En la mente",
            title: "Lo que te ocupa la cabeza",
            bullets: [
              "Preocupación que no para, incluso sin un motivo claro",
              "Pensamientos repetitivos que se reinician solos",
              "Dificultad para concentrarte o para tomar decisiones",
              "Sensación de estar siempre en alerta",
            ],
          },
        ],
      },
    },

    // ----------------------------------------------------- cuándo pedir ayuda
    {
      kind: "text",
      data: {
        id: "cuando-pedir-ayuda",
        eyebrow: "¿Cuándo pedir ayuda?",
        title: "No hace falta tocar fondo",
        paragraphs: [
          "La ansiedad pide ayuda cuando se queda, no cuando aparece. Estas son tres señales de que merece la pena mirarla:",
        ],
        bullets: [
          "La preocupación ocupa gran parte de tu día.",
          "Afecta a tu descanso, a tu trabajo o a tus relaciones.",
          "Cosas pequeñas te generan una angustia desproporcionada.",
        ],
        footnote: "No hace falta tocar fondo para pedir ayuda.",
        tone: "canvas",
      },
    },

    // -------------------------------------------------------- cómo trabajamos
    {
      kind: "split",
      data: {
        id: "como-trabajamos",
        eyebrow: "Cómo trabajamos la ansiedad",
        title: "Primero entender, después herramientas",
        paragraphs: [
          // TODO confirmar con Didac: la web antigua hablaba de un "enfoque
          // profundo" e "integradora" (buscar el origen del malestar). Aquí se
          // usa la formulación de la landing (cognitivo-conductual y humanista).
          // Hay que unificar el criterio en todo el sitio antes de publicar.
          "Te explico con palabras claras qué ocurre en tu cuerpo y en tu mente cuando aparece la ansiedad. No hace falta saber nada de psicología para seguirme: lo importante es que lo entiendas.",
          "Después entendemos qué función cumple esa ansiedad en tu vida, trabajamos sobre pensamientos, emociones y hábitos, y practicas herramientas concretas para el día a día.",
        ],
        image: ansiedadImg,
        imageAlt: "Ambiente tranquilo y luminoso de la consulta",
        tone: "soft",
        footnote:
          "El proceso completo, paso a paso, está explicado en cuatro fases en la página principal.",
      },
    },

    // ----------------------------------------------------- primera sesión
    {
      kind: "rows",
      data: {
        id: "primera-sesion",
        eyebrow: "Tu primera sesión",
        title: "Gratuita, informativa y sin compromiso",
        description:
          "No es una evaluación ni un examen: es una conversación para que ambos sepamos si tiene sentido seguir.",
        variant: "full",
        items: [
          {
            title: "Me cuentas qué te pasa y cómo te afecta",
            subtitle: "Sin orden ni guion: con tus palabras.",
          },
          {
            title: "Conoces cómo trabajo",
            subtitle: "Enfoque, ritmo y qué se puede esperar de cada sesión.",
          },
          {
            title: "Salimos con una primera idea de plan",
            subtitle: "Qué vamos a trabajar y cómo revisaremos los avances.",
          },
        ],
      },
    },

    // -------------------------------------------------------------- proceso
    {
      kind: "process-link",
      data: {
        title: "El proceso, en cuatro fases",
        description:
          "Nos conocemos · Te lo explico · Trabajamos juntos · Lo que te llevas. Son las mismas cuatro fases para toda la web, escritas una sola vez.",
        href: processLink.href,
      },
    },

    // ------------------------------------------------------------------ FAQ
    {
      kind: "faq",
      data: {
        id: "faq",
        eyebrow: "Preguntas frecuentes",
        title: "Dudas habituales sobre la ansiedad",
        description:
          "Lo que más me preguntan las personas que llegan por aquí. Si tu caso no encaja del todo, lo vemos en la primera sesión.",
        items: [
          {
            question: "¿Cómo sé si es ansiedad o simple estrés?",
            answer:
              "Es normal sentir ansiedad en momentos exigentes. Merece atención cuando se mantiene en el tiempo, te ocupa gran parte del día o afecta a tu vida diaria. En la primera sesión lo vemos juntos.",
          },
          {
            question: "¿Se pueden trabajar los ataques de pánico?",
            answer:
              "Sí, forman parte de lo que trabajamos: entender qué ocurre en el cuerpo y practicar herramientas para afrontarlos.",
          },
          {
            question: "¿Cuánto dura el proceso?",
            answer:
              "Depende de cada caso. Al principio lo habitual es una sesión semanal y después se espacian. Lo revisamos juntos.",
          },
          {
            question: "¿Necesito medicación?",
            answer:
              "Como psicólogo no receto medicación. Si hace falta una valoración médica, te lo comento y te oriento.",
          },
          {
            question: "¿Funciona la terapia online para la ansiedad?",
            answer:
              "Sí, es igual de válida y te ahorra desplazamientos.",
          },
          {
            question: "¿Cómo es la primera sesión?",
            answer:
              "Me cuentas qué te pasa y cómo te afecta, conoces cómo trabajo y sales con una primera idea de plan. Es gratuita, informativa y sin compromiso.",
          },
        ],
      },
    },

    // ------------------------------------------------------------- CTA medio
    {
      kind: "cta",
      data: {
        title: "Si llevas tiempo con esto a cuestas, no hace falta esperar más",
        description:
          "Una primera conversación informativa, gratuita y sin compromiso, puede Bastar para entender por dónde empezar.",
      },
    },
  ],

  // TODO confirmar con Didac:
  // - El enfoque: aquí se usa "cognitivo-conductual y humanista" (landing).
  //   La web antigua decía "profundo" e "integradora". Debe ser el mismo
  //   criterio en las nueve páginas.
  // - La primera sesión gratuita: duración, y si es presencial u online.
  // - Si mantiene el uso de "especialista en ansiedad" o prefiere "psicólogo
  //   con experiencia en ansiedad" (ver nota 2 del encargo).
};