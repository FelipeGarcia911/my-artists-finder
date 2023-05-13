import { styled, theme } from '@/styles/theme'

import Typography from '@/styles/typography'

import LazyImage from '@/components/LazyImage'

export const Container = styled.div`
  align-items: center;
  box-shadow: 2px 10px 10px -8px ${theme.colors.black};
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2rem;
  text-decoration: none;
  width: 100%;

  &:hover {
    box-shadow: 2px 10px 30px -8px ${theme.colors.black};
    transition: box-shadow 0.3s;
  }
`

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`

export const Links = styled(Content)`
  margin-bottom: 1rem;
`

export const Title = styled(Typography.Title)`
  color: ${theme.colors.black};
  margin: 0;
  text-align: center;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const Genre = styled(Typography.Subtitle)`
  color: ${theme.colors.black};
  margin: 0;
  text-align: center;
`

export const Image = styled(LazyImage)`
  object-position: top center;
`
