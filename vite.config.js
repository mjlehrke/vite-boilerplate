/* eslint-disable import/no-extraneous-dependencies */

import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    // Injects provided styles into every Vue file. e.g. variables and mixins
    preprocessorOptions: {
      scss: { additionalData: `@import '@/styles/global.scss';` },
    },
  },
  resolve: {
    // Path aliases
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@stores': resolve(__dirname, 'src/stores'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@views': resolve(__dirname, 'src/views'),
    },
  },
});
