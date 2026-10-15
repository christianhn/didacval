import parejaImg from "../../assets/speciality/pareja.jpg";
import { serviceRoutes, type PageContent } from "./types";

export const sexologiaPage: PageContent = {
  path: "/sexologo-zaragoza/",
  slug: "sexologia",

  seo: {
    title: "Sexólogo en Zaragoza | Disfunción eréctil y eyaculación precoz",
    description:
      "Dificultades sexuales de origen psicológico: disfunción eréctil, eyaculación precoz, bajo deseo. Sexólogo en Zaragoza, atención confidencial presencial y online.",
  },

  hero: {
    title: "Sexólogo en Zaragoza",
    subtitle:
      "Un espacio confidencial para hablar de lo que cuesta nombrar. Las dificultades sexuales generan angustia, inseguridad y vergüenza, y muchas veces se viven en silencio durante años antes de pedir ayuda.",
    image: parejaImg,
    imageAlt: "Dos personas hablando en un ambiente tranquilo y privado",
    breadcrumbLabel: "Sexología",
  },

  /**
   * En esta página la confidencialidad no es una fila del panel ni una nota: es
   * la condición que hace que alguien acuda. Va en el subtítulo del hero y en el
   * del formulario, los dos sitios donde la persona está a punto de escribir.
   */
  contactDescription:
    "Primera sesión informativa gratuita y sin compromiso. Lo que cuentes está protegido por el secreto profesional: no se comparte con nadie, tampoco con tu pareja.",

  blocks: [
    // ---- 1. Contenedor beige redondeado (una sola vez por página) --------
    {
      kind: "rows",
      data: {
        id: "que-trabajo",
        eyebrow: "Qué dificultades trabajo",
        title: "Las que más se ven en consulta",
        description:
          "Todas se abordan desde su origen psicológico, que es el que más depende de lo que pasa por tu cabeza y no sólo de tu cuerpo.",
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
          {
            icon: "psychology_alt",
            kicker: "También puede ayudar",
            title: "Si lo que pesa es el ánimo o la confianza",
            href: serviceRoutes.ansiedad.path,
            ctaLabel: serviceRoutes.ansiedad.label,
            bullets: [
              "Si la dificultad viene de un momento malo",
              "Si detrás de la baja del deseo hay otra cosa",
            ],
          },
        ],
      },
    },

    // ---- 2. FAQ -----------------------------------------------------------
    //
    // Sin pasos: aquí no hay una secuencia propia que contar. Lo que hay es el
    // proceso general de la portada, que es el mismo en todas las páginas y vive
    // en el hero y en el formulario. Un bloque de pasos que lo repitiera con otros
    // títulos sería relleno con forma de sección.
    //
    // Va antes que la explicación de por qué aparecen, y no después: quien llega
    // aquí con una duda concreta ("¿es físico o psicológico?", "¿viene mi
    // pareja?") la resuelve en este punto; la explicación llega después como
    // respuesta a lo que ya se ha leído. Además rompe la coincidencia con
    // /terapia-adultos-zaragoza/, que tiene la misma lista de bloques en otro
    // orden por una razón editorial, no estética.
    {
      kind: "faq",
      data: {
        id: "faq",
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
    // ---- 3. Dos columnas -------------------------------------------------
    // Antes eran dos secciones ("Por qué aparecen" y "Secreto profesional"), y
    // la segunda era una sección entera para decir una sola cosa. La de
    // confidencialidad ha subido al subtítulo del hero y al del formulario, que
    // es donde de verdad frena a alguien a escribir; la explicación de por qué
    // aparecen es una sola sección a dos columnas.
    //
    // Sin imagen: `pareja.jpg` es la del hero y repetirla dentro de la misma
    // página la convertiría en papel pintado. La segunda columna la ocupa el
    // apunte de la posible causa física.
    {
      kind: "split",
      data: {
        id: "por-que-aparecen",
        eyebrow: "Por qué aparecen",
        title: "El cuerpo responde a lo que pasa por la cabeza",
        description:
          "Casi nunca hay una sola causa, y casi nunca es sólo del cuerpo.",
        paragraphs: [
          "La ansiedad, la presión por el rendimiento, experiencias previas, conflictos internos o dificultades en la relación pueden influir directamente en la respuesta sexual.",
          "Y también pasa lo contrario: cuando algo no funciona, acaba pesando en cómo se vive la relación entera. Por eso el trabajo no se queda en el síntoma que no funciona, sino en lo que eso ha ido dejando detrás.",
        ],
        note: {
          label: "Cuando puede haber una causa física",
          text: "Si la veo, te lo digo y te animo a consultarlo con tu médico. Lo que sí es psicológico es todo lo demás, y en eso trabajamos en consulta.",
        },
        tone: "soft",
      },
    },

  ],

  // La banda de CTA que cerraba la página ("Lo que cuesta nombrar, se puede
  // trabajar") ya no existe: el CTA está en el hero y en el formulario, que es lo
  // único que debe empujar a la conversión.

  // TODO confirmar con Didac:
  // - Alcance real de la sexología: ¿sólo hombres, también mujeres y parejas?
  // - Si mantiene la línea de la web antigua sobre parafilias que generan
  //   malestar, no se ha incluido por prudencia. Si se mantiene, redactarla con
  //   sobriedad en una sola frase.
  // - Denominación: la web antigua decía "sexólogo". Ver la nota 2 del encargo
  //   sobre el uso de la palabra "especialista".
};