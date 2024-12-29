import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/anchaldevbytes.github.io/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/index.html', // Ensure this points to your HTML file
    },
  },
});
