import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: './vitest-setup.js',
    environment: 'jsdom',
    globals: true,
  }
});
