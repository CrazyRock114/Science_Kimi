/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 部署在仓库子路径下（VITE_BASE=/Science_Kimi/），
  // 国内静态托管用根路径（默认 '/'）
  base: process.env.VITE_BASE ?? '/',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    css: false,
    // .reference/ 是第三方参考仓库（含其自身测试），不纳入本项目测试
    exclude: ['**/node_modules/**', '**/dist/**', '.reference/**'],
  },
});
