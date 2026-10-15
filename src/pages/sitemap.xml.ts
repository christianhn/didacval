import type { APIRoute } from "astro";
import { siteData } from "../data/site";
import { ansiedadPage } from "../data/pages/ansiedad";
import { sexologiaPage } from "../data/pages/sexologia";
import { adultosPage } from "../data/pages/adultos";
import { familiarPage } from "../data/pages/familiar";
import { quienSoyPage } from "../data/pages/quienSoy";
import { avisoLegal, politicaPrivacidad, cookies } from "../data/legal";

// Rutas que deben entrar en el sitemap. Las páginas de servicio importan su
// propia `path`, así que añadir una página nueva es añadir una línea aquí y
// nada más: no hay una lista de URLs escrita a mano que se pueda desincronizar.
const publicPages: readonly string[] = [
  "/",
  ansiedadPage.path,
  sexologiaPage.path,
  adultosPage.path,
  familiarPage.path,
  quienSoyPage.path,
  "/contacto/",
  avisoLegal.path,
  politicaPrivacidad.path,
  cookies.path,
];

// Las páginas legales van con `noindex` mientras el texto sea provisional, así
// que no deben entrar al sitemap mientras dure esa situación.
const noindexPaths: readonly string[] = [
  avisoLegal.path,
  politicaPrivacidad.path,
  cookies.path,
];

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

// Se usa la fecha de modificación de hoy en la web: un build estático no puede
// saber cuándo se editó cada texto sin conectarlo al sistema de ficheros, y una
// fecha de hoy es lo que Google espera para una web estática que se reconstruye
// entera en cada despliegue.
const lastmod = new Date().toISOString().slice(0, 10);

export const GET: APIRoute = () => {
  const urls = publicPages
    .filter((path) => !noindexPaths.includes(path))
    .map(
      (path) => `  <url>
    <loc>${escapeXml(new URL(path, siteData.url).href)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${path === "/" ? "1.0" : path === "/contacto/" ? "0.9" : "0.8"}</priority>
  </url>`,
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};