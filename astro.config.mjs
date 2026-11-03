import { defineConfig } from 'astro/config';

// Published on GitHub Pages from the chiriacadrian2296/portfolio repository.
export default defineConfig({
  site: 'https://chiriacadrian2296.github.io',
  base: '/portfolio',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
