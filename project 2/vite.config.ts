import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/your-actual-repo-name/', // Replace with your actual GitHub repo name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
