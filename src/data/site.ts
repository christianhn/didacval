export const siteData = {
  brand: {
    name: "Dídac Val",
    // REVISAR CON DIDAC: confirmar dato real antes de publicar
    subtitle: "Psicología Clínica & Sanitaria",
    logo: "https://lh3.googleusercontent.com/aida/AEtjO1UAmZTypn7lQDbYauimWCQC__TRKWQt8UUHRIQwu5HmBiQ54ob13I_ITNbuhf7Q5kZWs8RYazPlqf8O8Si9-SLgcNQDndD5bd3bd2viXCi-IkhZw5N_x4DapVVfLGNmcqgl0lViSqVgSth9X2YwSDwBOcTbI2Qw_070GeoIbioV2z85nCpDuNyvQJYzLam4ZKAv14SKDORTEH-JfBwUh6P3_Vj6hZWqDeYqrPOyixDt8-EYNaO-CDo",
    logoAlt: "Dídac Val Psicólogo",
  },
  nav: [
    { label: "Inicio", href: "#inicio", path: "inicio", active: true },
    { label: "Especialidades", href: "#areas-clinicas", path: "especialidades" },
    { label: "Metodología", href: "#metodologia", path: "metodologia" },
    { label: "Preguntas Frecuentes", href: "#faq", path: "preguntas-frecuentes" },
    { label: "Sobre mí", href: "#sobre-mi", path: "sobre-mi" },
  ],
  cta: {
    label: "Pedir Cita",
    href: "#contacto-cita",
    path: "primera-consulta",
  },
} as const;
