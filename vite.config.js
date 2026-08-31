import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  base: '/agrosentia/',
  plugins: [injectHTML(), FullReload(['./partials/**/*.html'])],
  build: {
    sourcemap: true,
  },
});
