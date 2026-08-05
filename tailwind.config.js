/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // miniMax 移植组件（simulations/mmx）使用的主题色，值同源项目（slate 系）
        ink: '#0f172a',
        'ink-soft': '#334155',
        muted: '#64748b',
        line: '#e2e8f0',
        surface: '#ffffff',
        canvas: '#f8fafc',
        accent: '#2563eb',
        physics: {
          DEFAULT: '#2563eb',
          light: '#eff6ff',
        },
        chemistry: {
          DEFAULT: '#059669',
          light: '#ecfdf5',
        },
        biology: {
          DEFAULT: '#d97706',
          light: '#fffbeb',
        },
      },
    },
  },
  plugins: [],
};
