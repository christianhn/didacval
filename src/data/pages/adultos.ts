import adultosImg from "../../assets/speciality/adults.jpg";
import { serviceRoutes, type PageContent } from "./types";

export const adultosPage: PageContent = {
  path: "/terapia-adultos-zaragoza/",
  slug: "adultos",

  seo: {
    title: "Terapia psicológica para adultos en Zaragoza | Didac Val",
    description:
      "Psicólogo para adultos en Zaragoza: tristeza, duelo, estrés laboral, autoestima y relaciones. Terapia presencial en Paseo de Sagasta 17 y online.",
  },

  hero: {
    eyebrow: "Terapia individual",
    title: "Terapia para adultos en Zaragoza",
    subtitle: "Un espacio sin juicios para entender lo que te pasa y decidir cómo seguir.",
    image: adultosImg,
    imageAlt: "Persona sentada en un entorno tranquilo y luminoso",
    breadcrumbLabel: "Terapia para adultos",
  },

  blocks: [
    {
      kind: "text",
      data: {
        id: "que-puedes-esperar",
        eyebrow: "Qué puedes esperar",
        title: "Un espacio para mirar lo que de verdad te pasa",
        paragraphs: [
          "La terapia no es un examen ni un tratamiento. Es un espacio para mirar lo que está pasando de verdad, con alguien que te ayuda a ordenarlo.",
        ],
        bullets: [
          "Explorar lo que piensas y sientes sin miedo a ser juzgado",
          "Comprender el origen de tu malestar y de tus patrones repetidos",
          "Aprender a relacionarte mejor contigo y con los demás",
          "Recuperar tu equilibrio y tus recursos",
        ],
        layout: "aside",
        tone: "bone",
      },
    },

    // ------------------------------------------------------- cuándo es buen momento
    {
      kind: "text",
      data: {
        id: "cuando-es-buen-momento",
        eyebrow: "¿Cuándo es buen momento?",
        title: "No hace falta que sea grave",
        paragraphs: [
          "Si algo de esto lleva meses rayando en tu día a día, merece la pena mirarlo:",
        ],
        bullets: [
          "Ansiedad o estrés continuo",
          "Ánimo bajo o tristeza",
          "Conflictos de pareja o familiares",
          "Duelo o ruptura",
          "Baja autoestima o inseguridad",
          "Sensación de vacío o dificultad para decidir",
        ],
        footnote:
          "La terapia no es solo para momentos de crisis: también sirve para conocerte mejor.",
        tone: "canvas",
      },
    },

    // --------------------------------------------------------- áreas que trabajo
    {
      kind: "rows",
      data: {
        id: "areas",
        eyebrow: "Áreas que trabajo",
        title: "Todo lo que cabe en una terapia individual",
        description:
          "Las dos primeras tienen página propia, porque son las que más se repiten: si tu caso es sobre todo una de ellas, empieza por ahí.",
        variant: "panel",
        cta: {
          label: "Consultar mi caso",
          href: "#contacto-cita",
        },
        items: [
          {
            icon: "spa",
            kicker: "Página propia",
            title: serviceRoutes.ansiedad.label,
            href: serviceRoutes.ansiedad.path,
            ctaLabel: serviceRoutes.ansiedad.short,
          },
          {
            icon: "favorite",
            kicker: "Página propia",
            title: serviceRoutes.sexologia.label,
            href: serviceRoutes.sexologia.path,
            ctaLabel: serviceRoutes.sexologia.short,
          },
          {
            icon: "water_drop",
            title: "Tristeza y depresión",
            bullets: [
              "Ánimo bajo persistente",
              "Pérdida de interés por lo que te gustaba",
            ],
          },
          {
            icon: "hourglass_empty",
            title: "Duelo y rupturas",
            bullets: [
              "Pérdida de alguien, o de una etapa",
              "Separaciones y divorcios",
            ],
          },
          {
            icon: "work",
            title: "Estrés laboral y oposiciones",
            bullets: [
              "Saturación y desgaste",
              "Preparación de exámenes y tests",
            ],
          },
          {
            icon: "visibility",
            title: "Fobias",
            bullets: [
              "Miedos que evitan cosas de tu día a día",
              "Reacciones de evitación",
            ],
          },
          {
            icon: "self_improvement",
            title: "Autoestima y relaciones",
            bullets: [
              "Inseguridad y autocrítica",
              "Dificultades para relacionarte con los demás",
            ],
          },
        ],
        related: {
          title: "También puedes empezar por aquí",
          links: [
            {
              label: serviceRoutes.familiar.label,
              href: serviceRoutes.familiar.path,
              description: serviceRoutes.familiar.short,
            },
            {
              label: "Sobre mí",
              href: "/quien-soy/",
              description: "Formación, enfoque y cómo es la consulta.",
            },
          ],
        },
      },
    },

    {
      kind: "text",
      data: {
        id: "como-trabajo",
        eyebrow: "Cómo trabajo",
        title: "Un plan claro desde el principio",
        paragraphs: [
          "Desde un enfoque cognitivo-conductual y humanista que adapto a cada persona: qué te trae, qué vamos a trabajar y cómo revisamos los avances. El objetivo es que termines con herramientas para afrontarlo por tu cuenta, no con una dependencia de la sesión.",
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
        title: "Dudas habituales",
        description:
          "Las preguntas que más me llegan de quien entra por primera vez a terapia.",
        // TODO confirmar con Didac: redacción propuesta. En especial la política
        // de derivación cuando aparece riesgo.
        items: [
          {
            question: "¿Cómo sé si necesito terapia?",
            answer:
              "No hace falta estar mal para pedir ayuda. Si algo no se va de tu cabeza, si la tristeza o la tensión se repiten o si te cuesta funcionar como antes, suele ayudar empezar. También sirve para conocerte mejor y decidir con más claridad.",
          },
          {
            question: "¿Cuánto dura?",
            answer:
              "No hay un número cerrado de sesiones: depende de cada caso. Al principio lo habitual es ir semanalmente y después se espacian. Lo revisamos juntos.",
          },
          {
            question: "¿Qué problemas se trabajan?",
            answer:
              "Principalmente tristeza, duelo y rupturas, estrés y ansiedad, baja autoestima, fobias, estrés laboral y dificultades en las relaciones. Si lo tuyo tiene que ver con la intimidad sexual, esa parte tiene su propia página.",
          },
          {
            question: "¿Presencial u online?",
            answer:
              "Las dos son igual de válidas. La online te ahorra desplazamientos, encaja mejor con tu trabajo o tus cuidados y puedes hacerla desde cualquier punto de España.",
          },
        ],
      },
    },

    {
      kind: "cta",
      data: {
        title: "No tienes que saber qué te pasa para empezar",
        description:
          "Con que me cuentes qué te trae es suficiente. La primera sesión informativa es gratuita y sin compromiso.",
      },
    },
  ],

  // TODO confirmar con Didac:
  // - Lista de problemas: trauma, obsesiones, adicciones y trastornos de
  //   personalidad estaban en la web antigua y no están en la landing. Si se
  //   mantienen, se añaden como línea secundaria "También acompaño: ...".
  // - "Oposiciones" sí aparece en la landing (bloque Details); aquí se ha
  //   agrupado con estrés laboral. Confirmar que se sigue manteniendo.
};