export const specialtiesData = {
  eyebrow: "ÁREAS DE INTERVENCIÓN",
  title: "Especialidades",
  description:
    "Un abordaje riguroso, adaptado a la etapa vital y a las necesidades de cada persona o familia.",
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
        "Sientes tensión física, preocupación incesante, pánico o insomnio. O esa sensación de agobio que te bloquea en lo cotidiano.",
      image: "src/assets/speciality/ansiedad.jpg",
      imageAlt: "Persona con ansiedad",
      cta: { label: "Saber más de ansiedad", href: "#contacto-cita" },
    },
    {
      kicker: "VÍNCULOS & INTIMIDAD",
      title: "Sexología y pareja",
      description:
        "Podemos trabajar la disfunción eréctil, el bajo deseo, las crisis de intimidad o la inseguridad, en un espacio neutral, libre de estigmas y confidencial.",
      image: "src/assets/speciality/pareja.jpg",
      imageAlt: "Pareja en terapia",
      cta: { label: "Saber más de sexología", href: "#contacto-cita" },
    },
    {
      kicker: "INDIVIDUAL",
      title: "Terapia para adultos",
      description:
        "Te acompaño en la tristeza, el duelo, las rupturas afectivas, el estrés laboral, las oposiciones o los bloqueos. Y también si simplemente quieres conocerte mejor.",
      image: "src/assets/speciality/adults.jpg",
      imageAlt: "Terapia individual",
      cta: { label: "Saber más de terapia individual", href: "#contacto-cita" },
    },
    {
      kicker: "FAMILIA & DESARROLLO",
      title: "Terapia familiar",
      description:
        "Trabajamos los conflictos, el distanciamiento entre generaciones, la orientación académica en Bachillerato o Universidad y las dificultades de conducta.",
      image: "src/assets/speciality/family.jpg",
      imageAlt: "Terapia familiar",
      cta: { label: "Saber más de terapia familiar", href: "#contacto-cita" },
    },
  ],
} as const;
