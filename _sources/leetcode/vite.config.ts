import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/leetcode/',
  plugins: [react()],
  build: { outDir: '../../leetcode', emptyOutDir: true },
});
