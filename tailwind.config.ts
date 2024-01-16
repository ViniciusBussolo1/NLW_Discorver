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
        linear: '#5498FF',
        black: '#0D114F',
        white: '#FAFAFA',
        red: '#E83F5B',
        lightBlue: '#E0ECFF',
        blue: '#3485FF',
        background: '#FBFCFF',
        overlay: '#040911',
        icons: '#A5B0C1',
        grey: {
          grey: '#4D5E77',
          blue: '#A1B2CD',
          medium: '#D3D9E2',
          light: '#E5EAF1',
        },
        hover: {
          blue: '#5699FF',
          red: '#EA4B65',
          grey: '#8794A7',
        },
      },
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config
