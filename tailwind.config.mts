import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#f9f6e7',
          light: '#fdfaeb',
          panel: '#faf7e8',
          warm: '#f4f1e2',
        },
        ink: '#1c180d',
        tan: {
          DEFAULT: '#eadfc3',
          hover: '#e5d5b8',
        },
        navy: {
          DEFAULT: '#404f70',
          dark: '#353e69',
          tile: '#404868',
        },
        sage: {
          DEFAULT: '#588078',
          button: '#508070',
          dark: '#406058',
          light: '#6b8e6f',
          frond: '#507870',
        },
        terracotta: {
          DEFAULT: '#b07050',
          dark: '#b06040',
          light: '#c08060',
        },
        mustard: {
          DEFAULT: '#d0a040',
          pale: '#e8d898',
          star: '#c09040',
        },
        wave: {
          bg: '#404868',
          line: '#e8f0f8',
        },
        dot: {
          bg: '#f2e8d8',
        },
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ["'Courier New'", 'monospace'],
      },
      boxShadow: {
        tile: '2px 2px 0px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.3)',
        'tile-hover': '3px 3px 0px rgba(0,0,0,0.3)',
        panel: '4px 4px 0px rgba(28,24,13,0.15)',
        stamp: 'inset 2px 2px 4px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}

export default config
