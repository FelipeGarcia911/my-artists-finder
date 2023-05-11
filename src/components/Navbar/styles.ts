import { styled, theme } from '@/styles/theme'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icons = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Container = styled.div`
  align-items: center;
  background: ${theme.colors.black};
  box-shadow: 1px 2px 10px 2px ${theme.colors.black};
  color: ${theme.colors.white};
  display: flex;
  flex-direction: row;
  height: 3rem;
  justify-content: space-between;
  left: 0;
  padding: 0.7rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
`

export const Logo = styled.img`
  cursor: pointer;
  height: 2.5rem;
  margin-right: 0.5rem;
`

export const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${theme.colors.white};
  margin-left: 2rem;
`
