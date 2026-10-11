export const processData = {
  eyebrow: "El proceso",
  title: "Cómo será tu proceso, paso a paso",
  description:
    "Un proceso claro, sin terapias interminables. Cada etapa tiene un propósito y sirve para que ganes autonomía.",
  steps: [
    {
      number: "01",
      kicker: "Fase Inicial",
      title: "Nos conocemos",
      description:
        "Escuchamos tu motivo de consulta y tu historia, y vemos qué es lo que más te pesa. Fijamos juntos unos objetivos realistas.",
      metaIcon: "edit_note",
      metaText: "1-2 sesiones",
    },
    {
      number: "02",
      kicker: "Fase Diagnóstica",
      title: "Te lo explico",
      description:
        "Te explico qué está ocurriendo a nivel psicológico y biológico. Definimos la hoja de ruta de la intervención.",
      metaIcon: "schema",
      metaText: "1 sesión",
    },
    {
      number: "03",
      kicker: "Fase Terapéutica",
      title: "Trabajamos juntos",
      description:
        "Trabajamos con estrategias adaptadas a ti (cognitivo-conductuales, humanistas o integradoras) sobre pensamientos, emociones y hábitos que te restan bienestar, con herramientas para regularte y afrontar lo que viene.",
      metaIcon: "psychology_alt",
      metaText: "Sesiones semanales",
    },
    {
      number: "04",
      kicker: "Fase de Autonomía",
      title: "Lo que te llevas",
      description:
        "A lo largo del proceso revisamos cómo vas y ajustamos el plan. Doy el alta cuando has alcanzado tus objetivos y puedes aplicar lo aprendido por tu cuenta.",
      metaIcon: "task_alt",
      metaText: "Quincenal → mensual",
    },
  ],
  note: "¡Y recuerda! La terapia no es solo para momentos de crisis: también es una vía para conocerte mejor, tomar decisiones con claridad y vivir de forma más plena.",
} as const;