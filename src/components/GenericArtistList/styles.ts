import { styled } from '@/styles/theme'
import Typography from '@/styles/typography'
import breakpoints from '@/styles/breakpoints'

import Loader from '@/components/Loader'

export const Container = styled(Loader)``

export const GridList = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  width: 100%;

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`

export const NoResults = styled(Typography.Subtitle)``
