/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
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
