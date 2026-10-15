import ansiedadImg from "../../assets/speciality/ansiedad.jpg";
import { serviceRoutes, type PageContent } from "./types";

export const ansiedadPage: PageContent = {
  path: "/psicologo-ansiedad-zaragoza/",
  slug: "ansiedad",

  seo: {
    title: "Psicólogo para la ansiedad en Zaragoza | Didac Val",
    description:
      "Terapia para la ansiedad y el estrés en Zaragoza: entiende qué te pasa y recupera la calma. Consulta en Paseo de Sagasta 17 y online. Primera sesión gratuita.",
  },

  hero: {
    title: "Psicólogo para la ansiedad en Zaragoza",
    // El subtítulo absorbe lo que era la sección de introducción: si el hero no
    // dice de qué va, la primera sección arranca con un titular que no tiene
    // nada que sostener.
    subtitle:
      "La ansiedad se nota en el cuerpo antes que en los pensamientos. Entender qué está pasando es el primer paso para recuperar la calma.",
    image: ansiedadImg,
    imageAlt:
      "Luz suave en una habitación tranquila: la ansiedad se nota en el cuerpo antes que en los pensamientos",
    breadcrumbLabel: "Ansiedad y estrés",
  },

  blocks: [
    // ---- 1. Contenedor beige redondeado (una sola vez por página) --------
    //
    // Antes eran dos secciones ("Cómo se manifiesta" y "¿Cuándo pedir ayuda?"):
    // ocho filas en total, repartidas en dos bloques que se leían casi igual.
    // Ahora son tres filas y un solo panel, que es lo que el bloque da: la
    // cuarta fila —los ataques de pánico— se ha fundido con la de "cuándo pedir
    // ayuda", que es donde la persona las reconoce.
    {
      kind: "rows",
      data: {
        id: "como-se-manifiesta",
        eyebrow: "Cómo se manifiesta",
        title: "No siempre es fácil de distinguir",
        description:
          "Suele aparecer en dos sitios a la vez, y reconocerlos es el primer paso para poder trabajar sobre ellos.",
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
          {
            icon: "hourglass_empty",
            kicker: "Cuándo pedir ayuda",
            title: "Señales de que merece la pena mirarla",
            bullets: [
              "Ataques de pánico o miedo intenso a perder el control",
              "La preocupación ocupa gran parte de tu día",
              "Afecta a tu descanso, a tu trabajo o a tus relaciones",
              "Cosas pequeñas te generan una angustia desproporcionada",
            ],
          },
        ],
      },
    },

    // ---- 2. Dos columnas -------------------------------------------------
    // Sin imagen: `ansiedad.jpg` es la del hero y repetirla dentro de la misma
    // página la convierte en papel pintado. La segunda columna la ocupa el apunte
    // de la medicación, que antes era una pregunta suelta de la FAQ y se leía
    // como una advertencia en lugar de una aclaración de alcance.
    //
    // TODO confirmar con Didac: la web antigua hablaba de un "enfoque profundo"
    // e "integradora" (buscar el origen del malestar). Aquí se usa la
    // formulación de la landing (cognitivo-conductual y humanista). Hay que
    // unificar el criterio en todo el sitio antes de publicar.
    {
      kind: "split",
      data: {
        id: "como-trabajamos",
        eyebrow: "Cómo trabajamos",
        title: "Primero entender, después herramientas",
        paragraphs: [
          "Te explico con palabras claras qué ocurre en tu cuerpo y en tu mente cuando aparece la ansiedad, de dónde viene esa reacción y qué la está manteniendo ahora mismo. Sin ese paso, las herramientas se aplican a ciegas.",
          "La ansiedad suele aparecer por algo. Ver para qué sirve en tu caso es lo que permite dejar de luchar contra ella a ciegas; después trabajamos sobre pensamientos, emociones y hábitos, y practicas hasta que dejan de exigirte un esfuerzo deliberado.",
          "No hace falta esperar a una crisis para pedir cita. Y si lo que además pesa es el estrés del trabajo, el duelo o la autoestima, hay una página pensada para eso:",
        ],
        paragraphLink: {
          label: "terapia para adultos",
          href: serviceRoutes.adultos.path,
        },
        note: {
          label: "Medicación",
          text: "No hace falta dejar la medicación para empezar la terapia. Si ya tomas alguna, lo comentamos en la primera sesión y te oriento si hace falta una valoración médica.",
        },
        tone: "base",
      },
    },

    // ---- 3. Secuencia numerada -------------------------------------------
    // Lo que esta página cuenta como secuencia propia es la primera sesión: tres
    // pasos concretos y verificables. El proceso general de cuatro fases ya
    // vive en la landing, de ahí el enlace de pie que separa las dos cosas.
    {
      kind: "steps",
      data: {
        id: "primera-sesion",
          title: "Tu primera sesión",
        description:
          "Es gratuita, informativa y sin compromiso. No hace falta saber nada de psicología para seguirla: lo importante es que lo entiendas.",
        tone: "soft",
        aside: {
          text: "No hace falta llegar con nada preparado. Se cuenta lo que salga y ya se trabaja sobre eso: nadie va a pedirte que lo expliques bien.",
        },
        footerLink: {
          label: "Ver el proceso completo",
          href: "/#proceso",
        },
        steps: [
          {
            number: "01",
            kicker: "Me cuentas",
            title: "Qué te pasa y desde cuándo",
            description:
              "Con lo que salga, sin orden ni guion. Con eso ya hay material suficiente para empezar a entender de qué se trata.",
          },
          {
            number: "02",
            kicker: "Conoces",
            title: "Cómo trabajo y qué espero",
            description:
              "Te explico el enfoque y cómo se lleva una sesión, con ejemplos. Si no te encaja, también eso se dice en la primera.",
          },
          {
            number: "03",
            kicker: "Sales",
            title: "Con una idea de plan",
            description:
              "Te doy una idea clara de por dónde empezaríamos y en cuántas sesiones. Si decides seguir, ya sabes cómo sería.",
          },
        ],
      },
    },

    // ---- 4. FAQ -----------------------------------------------------------
    //
    // Preguntas propias de esta página. Las de la portada ("¿Cuándo es el
    // momento de acudir?", "¿Cuántas sesiones necesitaré?", "¿Presencial u
    // online?", la primera sesión) ya están allí y no se repiten: aquí va lo que
    // la gente con ansiedad pregunta de verdad y no encuentra en la portada.
    {
      kind: "faq",
      data: {
        id: "faq",
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
              "Sí, forman parte de lo que trabajamos. Lo primero es entender qué está ocurriendo en el cuerpo cuando llega; después se practica una forma de afrontarlo que no acabe en salir corriendo de la situación.",
          },
          {
            question: "¿Necesito medicación?",
            answer:
              "Como psicólogo no receto medicación. Si hace falta una valoración médica, te lo comento y te oriento. Y si ya estás tomando algo, la terapia se combine perfectamente con ella.",
          },
          {
            question: "¿Puedo hacer algo por mi cuenta mientras espero la cita?",
            answer:
              "Ayuda, y no poco: el ejercicio regular, algo de sueño y limitar el alcohol suelen notar algo. Lo que no conviene es quedarse solo con eso cuando ya te está afectando a tus días. Los hábitos y la terapia pueden ir a la vez, no se estorban.",
          },
          {
            question: "¿Trabajas con casos graves o con crisis?",
            answer:
              "Trabajo con lo que llega a consulta de forma programada. Si detecto que hay riesgo para tu integridad o la de alguien más, te lo diré y te ayudaré a buscar la atención que necesitas en ese momento.",
          },
        ],
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