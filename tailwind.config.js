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
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              'text-decoration-line': 'none',
              color: theme('colors.amber.700'),
              '&:hover': {
                'text-decoration-line': 'underline !important',
                'text-decoration-color': `${theme('colors.amber.500')} !important`,
              },
            },
          },
        },
      }),
    },
    fontFamily: {
      sans: ['Alegreya Sans', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
