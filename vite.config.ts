/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './config/test/setup.ts',
  },
});
