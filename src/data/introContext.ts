export const introContextData = {
  // Contexto de apoyo bajo el titular del intro. La sección está desactivada
  // en pages/index.astro; se mantiene el texto alineado con el resto.
  description:
    "Atención individual para adultos en Zaragoza, sea cual sea lo que te trae: ansiedad, estrés, decisiones difíciles, relaciones o momentos de cambio.",
  tagline:
    "Un espacio tranquilo en Paseo de Sagasta 17, con tiempo para hablar sin prisas.",
  location: {
    city: "Zaragoza",
    address: "Paseo de Sagasta 17",
    icon: "location_on",
  },
  motifs: [
    { label: "Ansiedad y estrés", icon: "self_improvement" },
    { label: "Sexología", icon: "favorite" },
    { label: "Agotamiento laboral", icon: "work_history" },
    { label: "Autoestima y bloqueos", icon: "psychology_alt" },
  ],
} as const;
