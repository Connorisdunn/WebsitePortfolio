// In project 2/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/WebsitePortfolio/', // Your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
