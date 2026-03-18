import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent:  '#C8A96E',
        page:    '#1A1714',
        card:    '#211D1A',
        proof:   '#1A1714',
        divider: '#2C2521',
        'divider-soft': '#342F2B',
        body:    '#9B9188',
        muted:   '#4A4440',
        dim:     '#7A6E68',
        cream:   '#F5F2ED',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
