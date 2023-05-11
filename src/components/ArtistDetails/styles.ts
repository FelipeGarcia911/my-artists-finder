import { styled, theme } from '@/styles/theme'

import Typography from '@/styles/typography'

import LazyImage from '@/components/LazyImage'
import breakpoints from '@/styles/breakpoints'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`

export const ImageContainer = styled.div`
  flex: 1;
`

export const DataContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  padding-left: 1rem;
`

export const Details = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
`

export const Title = styled(Typography.Title3)`
  margin-top: 0;
  text-align: center;

  @media (min-width: ${breakpoints.md}) {
    text-align: left;
  }
`

export const Subtitle = styled(Typography.Title2)`
  color: ${theme.colors.gray};
  margin: 2rem 0;
  text-align: center;
`

export const Label = styled(Typography.Subtitle)`
  margin: 0 0 0.3rem;
`

export const Image = styled(LazyImage)`
  object-fit: contain;
  object-position: top center;
`

export const List = styled.div`
  width: 100%;
`
