import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/WebsitePortfolio/', // This matches your repo name, so it's correct
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
