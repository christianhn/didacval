import ansiedadImg from "../assets/speciality/ansiedad.jpg";
import parejaImg from "../assets/speciality/pareja.jpg";
import adultsImg from "../assets/speciality/adults.jpg";
import familyImg from "../assets/speciality/family.jpg";

export const specialtiesData = {
  eyebrow: "Áreas de intervención",
  title: "Especialidades",
  description:
    "Un abordaje riguroso y cercano, adaptado a cada etapa y a cada persona.",
  headerCta: {
    label: "Consultar mi caso",
    href: "#contacto-cita",
  },
  // `image` es un asset importado (ImageMetadata) para que <Image /> lo optimice.
  // Si lo dejas como null se muestra el placeholder gris con icono.
  // `icon` y `short` los usa además el hero, que sólo enseña las tres primeras
  // y necesita una línea corta: `description` es larga para ese hueco.
  // `href` es la página interior de la especialidad: la tarjeta entera lleva
  // allí. `cta` es el enlace secundario de la tarjeta y sigue apuntando al
  // formulario, porque es una acción ("consultar mi caso"), no navegación.
  cards: [
    {
      kicker: "Principal foco",
      title: "Ansiedad y estrés",
      description:
        "Tensión en el cuerpo, preocupación que no para, insomnio, ataques de pánico o la sensación de ir siempre al límite. Te explico qué te ocurre y trabajamos para que recuperes calma y control.",
      icon: "spa",
      short: "Tensión, insomnio o la sensación de ir siempre al límite.",
      image: ansiedadImg,
      imageAlt: "Ansiedad: tensión y preocupación",
      href: "/psicologo-ansiedad-zaragoza/"
    },
    {
      kicker: "Intimidad",
      title: "Sexología",
      description:
        "Disfunción eréctil, eyaculación precoz, bajo deseo o inseguridad en la intimidad. Un espacio confidencial y sin juicios para hablar de lo que cuesta nombrar.",
      icon: "favorite",
      short: "Un espacio confidencial para hablar de lo que cuesta nombrar.",
      image: parejaImg,
      imageAlt: "Sexología e intimidad",
      href: "/sexologo-zaragoza/"
    },
    {
      kicker: "Individual",
      title: "Terapia individual",
      description:
        "Tristeza, duelo, rupturas, estrés laboral, oposiciones o bloqueos. También depresión, autoestima, fobias o dificultades en las relaciones. Y si no te pasa nada concreto, pero quieres conocerte mejor.",
      icon: "psychology_alt",
      short: "Tristeza, duelo, rupturas, estrés o bloqueos.",
      image: adultsImg,
      imageAlt: "Terapia individual para adultos",
      href: "/terapia-adultos-zaragoza/"
    },
    {
      kicker: "Familia y desarrollo",
      title: "Adolescentes y familia",
      description:
        "Conflictos en casa, ansiedad o bajo estado de ánimo en la adolescencia, problemas de conducta y orientación académica en Bachillerato y Universidad.",
      icon: "family_restroom",
      short: "Conflictos, bajo estado de ánimo y orientación académica.",
      image: familyImg,
      imageAlt: "Adolescentes y familia",
      href: "/terapia-familiar-zaragoza/"
    },
  ],
};