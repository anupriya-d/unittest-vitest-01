// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // if you're using Vue
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom', // or 'happy-dom'
  },
});
