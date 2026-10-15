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
    title: "Terapia para adultos en Zaragoza",
    subtitle:
      "Un espacio sin juicios para entender lo que te pasa y decidir cómo seguir. La terapia no es un examen: es un lugar donde mirar de verdad lo que está pasando.",
    image: adultosImg,
    imageAlt: "Persona sentada en un entorno tranquilo y luminoso",
    breadcrumbLabel: "Terapia para adultos",
  },

  blocks: [
    // ---- 1. Contenedor beige redondeado (una sola vez por página) --------
    //
    // Antes eran siete filas en un panel de casi 1400 px, más una franja de
    // enlaces relacionados debajo que hacía el bloque todavía más largo. Ahora
    // son seis filas y los enlaces relacionados salen del panel: los dos
    // "página propia" son filas con enlace, y el resto de páginas se enlaza
    // desde el texto de la sección siguiente.
    {
      kind: "rows",
      data: {
        id: "areas",
        eyebrow: "Áreas que trabajo",
        title: "Todo lo que cabe en una terapia individual",
        description:
          "Las dos primeras tienen página propia, porque son las que más se repiten: si tu caso es sobre todo una de ellas, empieza por ahí.",
        items: [
          {
            icon: "spa",
            kicker: "Página propia",
            // El título de la fila describe la situación y el `ctaLabel` nombra
            // la página a la que lleva. Al revés, el rótulo repetía palabra por
            // palabra la primera viñeta.
            title: "Ansiedad y preocupación que no para",
            href: serviceRoutes.ansiedad.path,
            ctaLabel: serviceRoutes.ansiedad.label,
            bullets: [
              "Tensión, insomnio y la sensación de ir siempre al límite",
              "Ataques de pánico o delante de situaciones concretas",
            ],
          },
          {
            icon: "favorite",
            kicker: "Página propia",
            title: "Dificultades en la vida sexual",
            href: serviceRoutes.sexologia.path,
            ctaLabel: serviceRoutes.sexologia.label,
            bullets: [
              "Disfunción eréctil, eyaculación precoz y bajo deseo",
              "Inseguridad en la vida sexual o en la pareja",
            ],
          },
          {
            icon: "water_drop",
            kicker: "Ánimo bajo",
            title: "Tristeza y bajo estado de ánimo",
            bullets: [
              "Ánimo bajo persistente",
              "Pérdida de interés por lo que te gustaba",
              "Sensación de vacío o dificultad para decidir",
            ],
          },
          {
            icon: "hourglass_empty",
            kicker: "Duelo",
            title: "Rupturas y pérdidas",
            bullets: [
              "Pérdida de alguien, o de una etapa entera",
              "Separaciones y divorcios",
              "Duelos que no acaban de pasar",
            ],
          },
          {
            icon: "work",
            kicker: "Trabajo",
            title: "Estrés laboral y oposiciones",
            bullets: [
              "Saturación y desgaste",
              "Preparación de exámenes y tests",
              "Dificultad para desconectar al salir",
            ],
          },
          {
            icon: "self_improvement",
            kicker: "Vinculación",
            title: "Autoestima y relaciones",
            bullets: [
              "Inseguridad y autocrítica",
              "Miedos que te hacen evitar cosas del día a día",
              "Dificultades para relacionarte con los demás",
            ],
          },
        ],
      },
    },

    // ---- 2. Dos columnas -------------------------------------------------
    // Sin imagen: `adults.jpg` es la del hero y repetirla dentro de la misma
    // página la convertiría en papel pintado. Antes esto eran dos secciones
    // ("Qué puedes esperar" y "¿Cuándo es buen momento?") más una secuencia
    // numerada de cuatro pasos: tres bloques para decir lo mismo. Ahora es una
    // sección a dos columnas, y la segunda la ocupa el apunte.
    {
      kind: "split",
      data: {
        id: "que-puedes-esperar",
        eyebrow: "Qué puedes esperar",
        title: "Un espacio para mirar lo que de verdad te pasa",
        paragraphs: [
          "Desde un enfoque cognitivo-conductual y humanista, el trabajo tiene siempre la misma forma: primero mirar lo que piensas y sientes sin miedo a que nada de eso esté en tu contra, y después entender de dónde viene, que es lo que deja de hacerlo un misterio y empieza a poder cambiarse.",
          "Luego la parte que más se nota: practicar otras formas de estar con lo que ocurre, en tus relaciones y contigo, y volver a los recursos que ya tienes y que el malestar había dejado enterrados.",
          "Si has llegado hasta aquí leyendo, ya sabes lo que te trae. Y si aún no lo sabes del todo, también sirve: puedes contármelo en la primera sesión.",
        ],
        note: {
          label: "El objetivo",
          text: "Que termines con herramientas para afrontarlo por tu cuenta, no con una dependencia de la sesión. Si en algún momento dejamos de aportar, lo hablamos y lo ajustamos.",
        },
        // `soft`, no `base`: la FAQ es `base` y dos secciones seguidas no pueden
        // compartir fondo.
        tone: "soft",
      },
    },

    // ---- 3. FAQ -----------------------------------------------------------
    //
    // Preguntas propias de esta página. Las de la portada ("¿Cuándo es el
    // momento de acudir?", "¿Cuántas sesiones necesitaré?", "¿Presencial u
    // online?", la primera sesión) no se repiten: aquí va lo que se pregunta
    // desde el hueco de "no sé bien qué me pasa".
    {
      kind: "faq",
      data: {
        id: "faq",
          title: "Dudas habituales",
        description:
          "Las preguntas que más me llegan de quien entra por primera vez a terapia.",
        // TODO confirmar con Didac: redacción propuesta. Sobre todo la política
        // de derivación y el paso a otro profesional.
        items: [
          {
            question: "¿Qué problemas se trabajan?",
            answer:
              "Principalmente tristeza, duelo y rupturas, estrés y ansiedad, baja autoestima, fobias, estrés laboral y dificultades en las relaciones. Si lo tuyo tiene que ver con la intimidad sexual, esa parte tiene su propia página.",
          },
          {
            question: "¿Y si no sé bien qué me pasa?",
            answer:
              "Es más común de lo que parece, y no impide empezar. La primera sesión sirve precisamente para poner orden: me cuentas lo que notas y lo vamos ordenando hasta encontrar qué lo alimenta.",
          },
          {
            question: "¿Puedo pedir cita sin un problema claro?",
            answer:
              "Sí. Muchas personas llegan sin una etiqueta y con la sensación de que algo no encaja. Eso ya es motivo suficiente, y trabajar sobre ello suele ser el principio de lo demás.",
          },
          {
            question: "¿Qué pasa si en terapia aparece algo que necesita otro profesional?",
            answer:
              "Te lo digo y lo hablamos. Si veo que tu caso necesita una valoración médica, psiquiátrica o de otra especialidad, te lo comento con la misma claridad y te ayudo a buscar ese profesional. No se continúa con algo que no es mío.",
          },
          {
            question: "¿Cada cuánto se cita?",
            answer:
              "Al principio lo habitual es semanal, porque es el ritmo en el que el trabajo coge forma. Después se espacia a quincenal o mensual según cómo vaya, y lo revisamos juntos en lugar de decidirlo por inercia.",
          },
        ],
      },
    },
  ],

  // La banda de CTA que cerraba la página ("No tienes que saber qué te pasa para
  // empezar") ya no existe: el CTA está en el hero y en el formulario.

  // TODO confirmar con Didac:
  // - Lista de problemas: trauma, obsesiones, adicciones y trastornos de
  //   personalidad estaban en la web antigua y no están en la landing. Si se
  //   mantienen, se añaden como línea secundaria "También acompaño: ...".
  // - "Oposiciones" sí aparece en la landing (bloque Details); aquí se ha
  //   agrupado con estrés laboral. Confirmar que se sigue manteniendo.
};