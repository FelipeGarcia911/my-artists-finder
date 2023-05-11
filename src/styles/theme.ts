import emotionStyled, { CreateStyled } from '@emotion/styled'

import colors from './colors'
import fonts from './fonts'

export const theme = {
  colors,
  fonts,
}

export type ThemeType = typeof theme

export const styled = emotionStyled as CreateStyled<ThemeType>
