export const processData = {
  eyebrow: "El proceso, paso a paso",
  title: "Cómo se estructura la psicoterapia",
  description:
    "Un proceso transparente sin terapias interminables. Cada etapa tiene un propósito medible, orientado a consolidar tu autonomía emocional.",
  steps: [
    {
      number: "01",
      kicker: "Fase Inicial",
      title: "Evaluación y Objetivos",
      description:
        "Comprender el motivo de consulta, tu historia personal y mapear los detonantes de la tensión. Fijamos metas terapéuticas realistas.",
      metaIcon: "edit_note",
      metaText: "1-2 sesiones",
    },
    {
      number: "02",
      kicker: "Fase Diagnóstica",
      title: "Devolución y Plan",
      description:
        "Te explico qué está ocurriendo a nivel psicológico y biológico. Trazamos conjuntamente la hoja de ruta clara de intervención.",
      metaIcon: "schema",
      metaText: "Claridad conceptual",
    },
    {
      number: "03",
      kicker: "Fase Práctica",
      title: "Intervención Activa",
      description:
        "Adquisición de recursos prácticos: regulación emocional, reestructuración de pensamientos distorsionados y técnicas de afrontamiento conductual.",
      metaIcon: "psychology_alt",
      metaText: "Frecuencia semanal",
    },
    {
      number: "04",
      kicker: "Fase de Autonomía",
      title: "Consolidación y Alta",
      description:
        "Espaciado gradual de las sesiones a quincenales y mensuales para verificar que sostienes los cambios por ti mismo antes del alta médica definitiva.",
      metaIcon: "task_alt",
      metaText: "Cierre y seguimiento",
    },
  ],
} as const;
