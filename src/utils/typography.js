import Typography from 'typography'
import grandViewTheme from 'typography-theme-grand-view'
import Colors from './colors'

grandViewTheme.overrideThemeStyles = () => ({
  a: {
    color: Colors.primary,
  },
  "a:hover,a:active": {
    color: Colors.primary,
    textDecoration: "underline"
  },
})
const typography = new Typography(grandViewTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
