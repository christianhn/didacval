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
    // ---- 1. Contenedor beige redondeado (una sola vez por página) --------
    //
    // Antes eran tres bloques para la misma información: un panel de filas con
    // "cómo trabajo", la historia, y la formación como bloque propio con sus
    // tres grupos en rejilla. Ahora la historia va en dos columnas, el enfoque
    // baja a apunte, y la formación son tres filas del panel. La formación no
    // necesita su propio bloque: son tres grupos con títulos y listas, que es
    // exactamente la estructura de una fila.
    //
    // Va primero, y no el último: el formulario lleva su propia superficie
    // `panel`, y dos bloques del mismo beige seguidos se leen como una sola
    // banda. Con la formación delante, la secuencia de superficies queda
    // base → panel → soft → panel, alternada como en el resto de subpáginas.
    {
      kind: "rows",
      data: {
        id: "formacion",
          title: "Lo que he estudiado para poder hacerlo",
        description:
          "Formación reglada en psicología, especialización en sexología clínica y formación específica en familias, mediación y educación afectivo-sexual.",
        items: [
          {
            icon: "school",
            kicker: "Base",
            title: "Grado y máster en psicología",
            bullets: [
              "Grado en Psicología · UNED",
              "Máximo en Psicología General Sanitaria · Universidad Europea de Valencia",
            ],
          },
          {
            icon: "science",
            kicker: "Especialización clínica",
            title: "Sexología clínica y intervención",
            bullets: [
              "Especialista en Terapia Sexual y Sexología Clínica · AEPSIS",
              "Curso superior en Trastornos de Personalidad",
              "Intervención psicosocial en infancia, familias y adolescencia · Instituto SIAC",
              "Mediación civil, mercantil y familiar · Talentia Formación",
              "Inteligencia emocional · Instituto SIAC",
              "Mediador/a en Educación Afectivo-Sexual · Instituto SIAC",
            ],
          },
          {
            icon: "family_restroom",
            kicker: "Educación y adolescencia",
            title: "Formación específica en la escuela",
            bullets: [
              "Mediación en el ámbito escolar",
              "Bullying y convivencia escolar",
              "TDAH, dislexia y altas capacidades",
              "Trastornos del espectro autista",
              "Diseño Universal para el Aprendizaje",
            ],
          },
        ],
      },
    },
    // ---- 2. Dos columnas -------------------------------------------------
    // Sin imagen: `didac2.png` es la del hero y repetirla dentro de la misma
    // página no arregla nada. La segunda columna la ocupa el apunte del enfoque,
    // que antes era la primera fila de un panel entero.
    {
      kind: "split",
      data: {
        id: "mi-historia",
        eyebrow: "Mi historia",
        title: "Una frase del colegio que me acompaña desde entonces",
        paragraphs: [
          "De pequeño, en el colegio, nos pidieron escribir una frase con nuestro nombre. La mía fue «Soy Didac y de las personas me gusta cuidar». Entonces no sabía que esa palabra me acompañaría siempre.",
          "Cada uno es protagonista de su historia, y hay otros personajes que ayudan a escribirla. ¿Me dejas formar parte de la tuya?",
          "Trabajo con un plan claro desde el principio: qué te trae, qué vamos a trabajar y cómo revisamos los avances. El objetivo es que termines con herramientas para afrontarlo por tu cuenta, no con una dependencia de la sesión.",
        ],
        // TODO confirmar con Didac: el tono de la anécdota. La versión antigua
        // jugaba con la rima entre su nombre y la palabra "cuidar"; aquí se ha
        // quitado porque no se sostiene, pero hay que validar que la versión
        // corta le representa igual.
        note: {
          label: "El enfoque",
          text: "Cognitivo-conductual y humanista. No aplico el mismo protocolo a todo el mundo: el punto de partida es tu caso, no un manual.",
        },
        tone: "soft",
      },
    },

  ],

  // La banda de CTA ("¿Hablamos?") y la sección de datos profesionales se han
  // ido: el CTA vive en el hero y en el formulario, y la colegiación ya está en
  // el kicker del hero. Repetirlas era lo que hacía que esta página tuviera ocho
  // bloques para decir cinco cosas.

  // TODO confirmar con Didac:
  // - Año de termine y años de ejercicio: no se publican porque no están
  //   confirmados.
  // - Todos los títulos de la formación vienen de la web antigua: revisar uno
  //   a uno que sigan vigentes y que las entidades formadoras se llamen así.
};