import { styled, theme } from '@/styles/theme'

import Typography from '@/styles/typography'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = styled(FontAwesomeIcon)`
  color: ${theme.colors.white};
  margin-right: 0.5rem;
`

export const Container = styled.div`
  cursor: pointer;
  position: relative;

  &:hover {
    span {
      text-decoration: underline;
    }
  }
`

export const Indicator = styled(Typography.Badge)`
  color: ${theme.colors.gray};
  left: 40%;
  position: absolute;
  top: 45%;
  transform: translate(-50%, -50%);
`
