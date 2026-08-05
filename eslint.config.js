// ESLint flat config（ESLint 10 + typescript-eslint 8）。
// 规则基线：eslint:recommended + tseslint:recommended + react-hooks 经典两条
// （rules-of-hooks / exhaustive-deps；v7 recommended 里的 React Compiler 诊断
// 超出本仓库 React 18 代码现状，暂不启用）。
// 另加 no-console（禁 log/info，留 warn/error 给明确的告警路径）。
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist/', 'node_modules/', 'public/', '.reference/', 'coverage/'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // 统一 error：禁止 console.log/info；console.warn/error 保留给有意的告警
      'no-console': ['error', { allow: ['warn', 'error'] }],
      // 以下划线开头的参数/变量视为有意留空（如回调里不用的第一个参数）
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { 'react-hooks': reactHooks },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    // CLI 脚本与本地开发服务器：console 即输出通道，不设限；.mjs 需要 node 全局
    files: ['scripts/**/*.ts', 'scripts/**/*.mjs', 'server/**/*.ts'],
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        URL: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
    },
  },
  {
    // igcse-kernels 是 IGCSE_miniMax 上游文件的原样复制（convert-igcse-lessons.ts
    // 生成，重跑即覆盖），不就地修 lint；no-useless-assignment 在上游属正常写法
    files: ['src/simulations/igcse-kernels/**/*.ts'],
    rules: {
      'no-useless-assignment': 'off',
    },
  },
  {
    // TODO(components owner)：两处 narration console.info 待清理后删除此豁免
    files: ['src/components/knowledge/KnowledgePointPage.tsx'],
    rules: {
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    },
  },
);
