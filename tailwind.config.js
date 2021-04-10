const colors = require('tailwindcss/colors')
const CustomColors = require('./src/utils/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: { center: true },
    colors: {
      ...CustomColors,
      gray: colors.coolGray,
    },
    fontFamily: {
      sans: ['Alegreya Sans', 'sans-serif'],
      serif: ['Alegreya', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
