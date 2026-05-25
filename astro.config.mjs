import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: "https://porfolio.dev/",
  base: "/",
  vite: {
    server: {
      force: true, // Forzar la recarga sin usar la caché
    },
    resolve: {
      alias: {
        "@": "/src", // Aquí defines el alias "@" para que apunte a la carpeta "src"
      },
    },
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
    fallback: {
      en: "en",
    },
  },
});
