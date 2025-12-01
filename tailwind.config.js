/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#1d4ed8',
          secondary: '#22d3ee',
          neutral: '#0f172a',
          accent: '#f97316',
          surface: '#0b1120',
        },
      },
      boxShadow: {
        glow: '0 20px 45px rgba(15, 23, 42, 0.35)',
      },
    },
  },
  plugins: [],
};


