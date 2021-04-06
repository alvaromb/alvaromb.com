import Typography from 'typography'
import theme from 'typography-theme-de-young'
import colors from './colors'

theme.bodyColor = colors.text
theme.headerColor = colors.primary
theme.overrideThemeStyles = ({}, options) => ({
  a: { color: colors.secondary },
  'h1,h2,h3,h4,h5,h6': {
    color: options.headerColor,
  },
})

const typography = new Typography(theme)

export const { scale, rhythm, options } = typography
export default typography
