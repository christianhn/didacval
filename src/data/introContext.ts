export const introContextData = {
  // Párrafo largo desplazado del hero — ahora como contexto de apoyo
  description:
    "Atención individual para adultos en Zaragoza, sea cual sea lo que te trae: ansiedad, estrés, decisiones difíciles, relaciones o momentos de cambio.",
  tagline:
    "Un espacio tranquilo en Paseo Sagasta 17, con rigor y sin prisas.",
  location: {
    city: "Zaragoza",
    address: "Paseo Sagasta 17",
    icon: "location_on",
  },
  motifs: [
    { label: "Ansiedad y estrés", icon: "self_improvement" },
    { label: "Agotamiento laboral", icon: "work_history" },
    { label: "Relaciones y pareja", icon: "diversity_2" },
    { label: "Autoestima y bloqueos", icon: "psychology_alt" },
  ],
} as const;
