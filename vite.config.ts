import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  resolve: {
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
  },
  server: { host: '127.0.0.1', port: 5173 },
  build: { target: 'es2022' },
});
