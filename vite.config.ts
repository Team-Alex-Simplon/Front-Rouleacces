import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configuration du port pour Vite
    port: 3000,
    // Permettre à Vite d'écouter sur toutes les interfaces réseau
    host: '0.0.0.0'
  }
});
