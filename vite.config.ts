import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** Static files copied into `dist/` root (favicon, etc.). */
const clientAssetsDir = 'client-static';

/** Match Express `listenPort`: PORT env, else same dev default as server.js (3001). */
const apiOrigin = `http://localhost:${process.env.PORT || '3001'}`;

export default defineConfig({
  plugins: [react()],
  publicDir: clientAssetsDir,
  server: {
    proxy: {
      '/api': {
        target: apiOrigin,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
