// Datos de contacto y enlaces del porfolio. ÚNICA fuente de verdad:
// cámbialos aquí y se propagan a Header, Footer, Hero, Contact y SEO.

// Dominio del sitio. Lo lee astro.config.mjs (site) y de ahí Astro.site
// alimenta canonical, OG y el sitemap. Con barra final.
// En GitHub Pages el workflow (.github/workflows/astro.yml) pasa --site y
// --base automáticamente en el build de producción, así que esto es sobre todo
// para dev/preview. Al pasar a dominio propio, cambia SOLO esta línea.
export const SITE_URL = 'https://patriciagugo.github.io/';

// Identidad
export const FULL_NAME = 'Patricia Guillén González';
export const ROLE = 'Psicóloga General Sanitaria';

// Contacto / redes
export const CONTACT_EMAIL = 'pat.guillengonzalez@gmail.com';
export const LINKEDIN_URL = 'https://es.linkedin.com/in/patriciaguillengonzalez';
