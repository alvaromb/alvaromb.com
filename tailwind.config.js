const colors = require('tailwindcss/colors')
const CustomColors = require('./src/utils/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: { center: true },
    colors: {
      ...CustomColors,
      gray: colors.gray,
      white: colors.white,
      green: colors.green,
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
  plugins: [require('@tailwindcss/typography')],
}
