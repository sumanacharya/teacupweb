/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'background-dark': 'var(--color-background-dark)',
        'background-darker': 'var(--color-background-darker)',
      },
      animationDelay: {
        100: '0.1s',
        200: '0.2s',
        300: '0.3s',
      },
    },
  },
  plugins: [],
};
