const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: { center: true },
    colors: {
      zinc: colors.zinc,
      white: colors.white,
      emerald: colors.emerald,
      amber: colors.amber,
    },
    fontFamily: {
      sans: ['Alegreya Sans', 'sans-serif'],
      serif: ['Alegreya', 'sans-serif'],
    },
    // extend: {
    //   spacing: {
    //     128: '32rem',
    //     144: '36rem',
    //   },
    // },
  },
  plugins: [require('@tailwindcss/typography')],
}
