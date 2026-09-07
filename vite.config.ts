import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // For a GitHub Pages *project* page (username.github.io/repo-name/), set
  // VITE_BASE_PATH=/repo-name/ when building. Leave unset (defaults to '/')
  // for a user/org page (username.github.io) or a custom domain.
  base: process.env.VITE_BASE_PATH || '/',
});
