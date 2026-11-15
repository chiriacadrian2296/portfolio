import { defineConfig } from 'astro/config';

// Published on GitHub Pages from the chiriacadrian2296/portfolio repository.
export default defineConfig({
  site: 'https://chiriacadrian2296.github.io',
  base: '/portfolio',
  trailingSlash: 'always',
  // Codex Autonomous Loop grew into AutoLoop: its old pages lead there.
  redirects: {
    '/progetti/codex-autonomous-loop/': '/portfolio/progetti/autoloop/',
    '/en/projects/codex-autonomous-loop/': '/portfolio/en/projects/autoloop/',
  },
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
