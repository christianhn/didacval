export const editorialData = {
  eyebrow: "Un buen momento para empezar",
  title: "No hace falta llegar al límite para pedir ayuda. A veces basta con no seguir aplazándolo.",
  description:
    "Muchas personas esperan semanas o meses antes de dar el paso, aunque ya notan que algo no va bien. Empezar antes no es exagerar: es cuidarte a tiempo.",
  checklist: [
    "Sientes agobio continuo, ideas que no se van y presión en el pecho",
    "Te cuesta dormirte y notas cansancio al despertar",
    "Las relaciones se han vuelto difíciles o la comunicación se ha bloqueado",
    "Te exiges demasiado en oposiciones, universidad o en el trabajo",
  ],
  card: {
    eyebrow: "Disponibilidad ahora",
    title: "Mi consulta en Sagasta 17",
    description:
      "Una consulta en pleno centro de Zaragoza, pensada para bajar el ritmo y hablar sin prisa. Un espacio discreto y con mucho rigor.",
    details: [
      { label: "Horarios habituales", value: "Lunes a Viernes · 9:00 - 20:00" },
      { label: "Contacto directo", value: "+34 622 58 85 60" },
      { label: "Modalidad", value: "Presencial en Zaragoza & Online" },
    ],
    cta: {
      label: "Reservar mi primera cita",
      href: "#contacto-cita",
      icon: "calendar_month",
    },
  },
} as const;
