export const processData = {
  title: "Cómo será tu proceso, paso a paso",
  description:
    "No hay un número de sesiones cerrado: depende de cada caso y lo vamos viendo contigo. Estas son las cuatro fases, no un paquete. Cada etapa tiene un propósito y te acerca a la autonomía.",
  // El marcador de cada fase es su palabra —"Inicio", "Comprensión",
  // "Trabajo", "Autonomía"— y no el número: el bloque cuenta un progreso, no
  // una lista, y el "01" sólo repetía la posición que ya da el orden de
  // lectura. El H3 dice qué pasa ("Nos conocemos") y la etiqueta en qué momento
  // del proceso es: es información, no decoración.
  //
  // Lo que se elimina son las píldoras ("Para situarnos", "Para entenderte"…):
  // no añadían nada que el título y la descripción no dijeran ya.
  steps: [
    {
      kicker: "Inicio",
      title: "Nos conocemos",
      description:
        "Me cuentas qué te trae y qué es lo que más te pesa. Definimos juntos unos objetivos realistas.",
    },
    {
      kicker: "Comprensión",
      title: "Te lo explico",
      description:
        "Te explico con palabras claras qué te está pasando y cómo vamos a trabajarlo. Sales con un plan.",
    },
    {
      kicker: "Trabajo",
      title: "Trabajamos juntos",
      description:
        "Aplicamos estrategias adaptadas a ti sobre tus pensamientos, emociones y hábitos, y practicas herramientas para el día a día.",
    },
    {
      kicker: "Autonomía",
      title: "Lo que te llevas",
      description:
        "Revisamos tus avances y espaciamos las sesiones poco a poco. Termino cuando ya puedes aplicar lo aprendido por tu cuenta.",
    },
  ],
  note: "La terapia no es solo para momentos de crisis. También sirve para conocerte mejor y decidir con más claridad.",
} as const;