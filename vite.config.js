import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        legal: resolve(__dirname, 'legal.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        thanks: resolve(__dirname, 'thanks.html'),
        tr_index: resolve(__dirname, 'tr/index.html'),
        tr_legal: resolve(__dirname, 'tr/legal.html'),
        tr_privacy: resolve(__dirname, 'tr/privacy.html'),
        tr_thanks: resolve(__dirname, 'tr/thanks.html'),
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});
