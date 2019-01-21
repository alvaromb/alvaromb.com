import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'
import Colors from './colors'

Wordpress2016.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  a: {
    color: Colors.primary,
  },
})

delete Wordpress2016.googleFonts

const typography = new Typography({
  ...Wordpress2016,
  headerFontFamily: ['Montserrat', 'sans-serif'],
  bodyFontFamily: ['Libre Franklin', 'serif'],
  baseFontSize: '22px',
  headerWeight: 700,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
