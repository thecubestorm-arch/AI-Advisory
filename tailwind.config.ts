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
        accent:  '#f59e0b',
        page:    '#0a0a0a',
        card:    '#141414',
        proof:   '#0d0d0d',
        divider: '#1c1c1c',
        'divider-soft': '#27272a',
        body:    '#71717a',
        muted:   '#3f3f46',
        dim:     '#52525b',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
