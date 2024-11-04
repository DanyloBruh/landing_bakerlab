import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '..',
    base: 'landing_bakerlab', 
  },
});