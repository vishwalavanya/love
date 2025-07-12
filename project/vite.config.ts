import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/love/', // 👈 This fixes 404 on GitHub Pages!
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
