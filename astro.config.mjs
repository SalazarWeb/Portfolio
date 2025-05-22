// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
  ],
  vite: {
    build: {
      assetsInlineLimit: 0 // Asegura que todos los assets sean tratados como archivos separados
    }
  }
});
