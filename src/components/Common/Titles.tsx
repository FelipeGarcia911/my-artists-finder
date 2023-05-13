import { styled, theme } from '@/styles/theme'
import Typography from '@/styles/typography'

const PageTitle = styled(Typography.Title2)`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
  color: ${theme.colors.gray};
`

export { PageTitle }
