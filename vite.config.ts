import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { builderDevTools } from '@builder.io/dev-tools/vite';

export default defineConfig(() => {
  return {
    define: {
      'import.meta.vitest': 'undefined',
    },
    test: {
      root: './',
      globals: true,
      includeSource: ['src/**/*.{ts,tsx}'],
      reporters: ['dot'],
      deps: {},
    },
    plugins: [builderDevTools(), qwikCity(), qwikVite()],
    resolve: {
      alias: {
        "~": "/src/",
        "@" : "/src/components/",
      }
    }
  }
});
