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
        paper: { DEFAULT: '#f9fafc', 2: '#eff1f4', 3: '#e4e7eb' },
        ink: { DEFAULT: '#16161a', 2: '#45454d', 3: '#6d6d77' },
        rule: { DEFAULT: 'rgba(22,22,26,0.18)', soft: 'rgba(22,22,26,0.09)' },
        stamp: { DEFAULT: '#2b41e5', soft: 'rgba(43,65,229,0.08)' },
        red: { ink: '#c8321e', soft: 'rgba(200,50,30,0.07)' },
        copy: {
          yellow: '#f6e38f',
          'yellow-ink': '#5d4a00',
          pink: '#f2c4cf',
          'pink-ink': '#6a1e33',
        },
      },
      fontFamily: {
        sans: ['var(--font-archivo)', 'Archivo', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'Menlo', 'monospace'],
      },
      maxWidth: {
        measure: '46rem',
        page: '80rem',
      },
    },
  },
  plugins: [],
}
