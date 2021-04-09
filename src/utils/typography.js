import Typography from 'typography'
import theme from 'typography-theme-de-young'
import Colors from './colors'

theme.baseFontSize = 22
theme.bodyColor = Colors.text
theme.headerColor = Colors.primary
theme.overrideThemeStyles = ({}, options) => ({
  a: { color: Colors.secondary },
  'h1,h2,h3,h4,h5,h6': {
    color: options.headerColor,
  },
})

const typography = new Typography(theme)

export const { scale, rhythm, options } = typography
export default typography
