import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fff8e8',
        foreground: '#2c221c',
        pastel: '#f1ecc8',
        vegGreen: {
          dark: '#099b84',
          DEFAULT: '#10806e',
          light: '#15a392',
        },
        vegYellow: {
          dark: '#d88f0f',
          DEFAULT: '#f6a011',
          light: '#ffb733',
        },
        vegOrange: {
          dark: '#e64d00',
          DEFAULT: '#ff5500',
          light: '#ff7733',
        },
        vegRed: {
          dark: '#8b3232',
          DEFAULT: '#ab3f3f',
          light: '#c55c5c',
        },
        vegBrown: {
          dark: '#2c221c',
          DEFAULT: '#4a3c32',
          light: '#6b5a4d',
        },
      },
      fontFamily: {
        gluten: ['var(--font-gluten)'],
        holtwood: ['var(--font-holtwood)'],
        adumu: ['var(--font-adumu)'],
      },
    },
  },
  plugins: [],
}

export default config 