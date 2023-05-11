import { styled } from '@/styles/theme'
import Typography from '@/styles/typography'

import Loader from '@/components/Loader'

export const Container = styled(Loader)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const NoResults = styled(Typography.Subtitle)``
