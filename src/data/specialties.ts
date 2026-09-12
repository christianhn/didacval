export const specialtiesData = {
  eyebrow: "ÁREAS DE INTERVENCIÓN",
  title: "Especialidades",
  description:
    "Abordaje clínico riguroso adaptado a la etapa vital, síntomas y necesidades de cada persona o familia.",
  headerCta: {
    label: "Consultar tu caso sin compromiso",
    href: "#contacto-cita",
  },
  // Cambia `image` por la ruta de tu imagen cuando la tengas.
  // Ejemplos:
  //   image: "/images/ansiedad.jpg"
  //   image: import.meta.glob... o import ansiedaImg from "../assets/specialties/ansiedad.jpg"
  // Si lo dejas como null / "" se muestra el placeholder gris con icono.
  cards: [
    {
      kicker: "PRINCIPAL FOCO",
      title: "Ansiedad y gestión emocional",
      description:
        "Tensión física recurrente, preocupación incesante, pánico, insomnio y sensación de agobio que bloquea tus actividades rutinarias.",
      image: "src/assets/speciality/ansiedad.jpg",
      imageAlt: "Persona con ansiedad",
      cta: { label: "Saber más sobre ansiedad", href: "#contacto-cita" },
    },
    {
      kicker: "VÍNCULOS & INTIMIDAD",
      title: "Sexología y pareja",
      description:
        "Disfunción eréctil, eyaculación precoz, bajo deseo, crisis de intimidad o inseguridad. Espacio neutral, libre de estigmas y confidencial.",
      image: "src/assets/speciality/pareja.jpg",
      imageAlt: "Pareja en terapia",
      cta: { label: "Saber más sobre sexología", href: "#contacto-cita" },
    },
    {
      kicker: "INDIVIDUAL",
      title: "Terapia para adultos",
      description:
        "Acompañamiento ante estados de tristeza, duelo, ruptura afectiva, estrés laboral, oposiciones, bloqueos y búsqueda de autoconocimiento.",
      image: "src/assets/speciality/adults.jpg",
      imageAlt: "Terapia individual",
      cta: { label: "Saber más sobre terapia adultos", href: "#contacto-cita" },
    },
    {
      kicker: "FAMILIA & DESARROLLO",
      title: "Terapia familiar",
      description:
        "Resolución de conflictos, distanciamiento generacional, orientación académica ante Bachillerato/Universidad y dificultades conductuales.",
      image: "src/assets/speciality/family.jpg",
      imageAlt: "Terapia familiar",
      cta: { label: "Saber más sobre familias", href: "#contacto-cita" },
    },
  ],
} as const;
