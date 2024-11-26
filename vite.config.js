import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    sourcemap: false,
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
});
