/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#009AD4',
          600: '#007bad',
          700: '#005c86',
          800: '#003d5f',
          900: '#1F3463',
        },
        ingemedia: {
          blue: '#1F3463',
          cyan: '#009AD4',
        },
      },
    },
  },
  plugins: [],
}

