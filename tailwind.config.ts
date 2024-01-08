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
        LightBlue: '#E0ECFF',
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
    },
  },
  plugins: [],
}
export default config
