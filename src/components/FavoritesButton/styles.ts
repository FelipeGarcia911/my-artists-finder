import { styled, theme } from '@/styles/theme'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = styled(FontAwesomeIcon)`
  color: ${theme.colors.white};
  cursor: pointer;
`

export const Container = styled.div`
  background-color: ${theme.colors.black};
  border-radius: 5px;
  border: none;
  color: ${theme.colors.white};
  padding: 0.5rem 1rem;
  text-align: center;

  &:hover {
    box-shadow: 2px 10px 30px -8px ${theme.colors.black};
    cursor: pointer;
    transition: box-shadow 0.3s;
  }
`
