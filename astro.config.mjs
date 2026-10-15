// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Origen canónico: lo usan <link rel="canonical">, Open Graph y el sitemap.
  // Al cambiar el dominio basta con tocar esta línea.
  site: "https://didacval.vercel.app",

  // Las rutas interiors se sirven siempre con barra final para que casen 1:1 con
  // las URLs de la web antigua (didacvalpsicologo.es) y no se genere un redirect
  // en cada visita de Google.
  trailingSlash: "always",

  build: {
    // Una carpeta + index.html por ruta. Es lo que necesitan las URLs con barra
    // final sin depender de la reescritura del servidor.
    format: "directory",
  },
});