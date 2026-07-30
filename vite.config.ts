/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    css: false,
    // .reference/ 是第三方参考仓库（含其自身测试），不纳入本项目测试
    exclude: ['**/node_modules/**', '**/dist/**', '.reference/**'],
  },
});
