export const faqData = {
  title: "Resuelvo tus dudas",
  description:
    "Empezar terapia genera preguntas. Estas son las más habituales.",
  contactBox: {
    title: "¿Tienes una pregunta específica?",
    description:
      "Puedes escribir directamente por WhatsApp o llamar para resolverla personalmente.",
    phone: "+34 622 58 85 60",
    phoneHref: "tel:+34622588560",
  },
  items: [
    {
      question: "¿Cuándo es el momento de acudir al psicólogo?",
      answer:
        "No hace falta tocar fondo. Si algo no se va de tu cabeza, si la tristeza o la tensión se repiten o te cuesta funcionar como antes, pedir ayuda pronto suele acelerar la recuperación. Además, la terapia sirve para conocerte mejor y decidir con más claridad.",
    },
    {
      question: "¿Cómo funciona la primera sesión informativa gratuita?",
      answer:
        "Me cuentas brevemente qué te ocurre, conoces cómo trabajo y vemos si te encuentras a gusto para empezar. No tiene coste ni compromiso de continuidad.",
    },
    {
      question: "¿Cuántas sesiones necesitaré?",
      answer:
        "Depende de cada caso. Al principio lo habitual es una sesión semanal; después las espaciamos a quincenales y mensuales. Lo revisamos juntos a lo largo del proceso.",
    },
    {
      question: "¿Es confidencial lo que hablo en consulta?",
      answer:
        "Sí, completamente. Todo lo que hablamos está protegido por el secreto profesional y por el Código Deontológico del Colegio Oficial de Psicología de Aragón.",
    },
    {
      question: "¿Presencial u online?",
      answer:
        "Las dos modalidades son igual de válidas. La online te ahorra desplazamientos, encaja mejor con tu trabajo o tus cuidados y puedes hacerla desde cualquier punto de España.",
    },
    {
      question: "¿Cuáles son los beneficios de ir al psicólogo?",
      answer:
        "Acudir al psicólogo te ayuda a comprenderte mejor, pensar con más claridad y actuar de forma más consciente. Puede reducir tu malestar emocional (ansiedad, estrés o tristeza), fortalecer tu autoestima, aprender a afrontar situaciones difíciles y mejorar tus relaciones. Además, es un espacio seguro y confidencial donde ser escuchado sin juicios y conocerte más.",
    },
  ],

  // TODO con Didac — son compromisos suyos, no se publica nada sin su respuesta:
  // - Precio por sesión (y si hay tarifa distinta para online, prolongación o
  //   ajuste). Afecta también a metrics.ts ("00€").
  // - Duración de la sesión (50 min / 60 min) y de la primera sesión
  //   informativa (antes decía "videollamada o llamada de 20-30 minutos").
  // - Si hace evaluación de personalidad u otros tests clínicos, y con qué
  //   instrumentos.
  // - Relación con médico/psiquiatra: si coordina con ellos y en qué casos
  //   deriva, y si deriva cuando detecta riesgo.
  // - Pregunta "y si no me siento cómodo contigo, ¿qué hago?": publicar el
  //   procedimiento real (cambio de profesional, segunda opinión...).
} as const;
