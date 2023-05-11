import colors from '@/styles/colors'
import { styled, theme } from '@/styles/theme'
import Typography from '@/styles/typography'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = styled(FontAwesomeIcon)`
  color: ${theme.colors.white};
  cursor: pointer;
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  max-width: 100%;
  position: relative;
  width: 25rem;
`

export const Input = styled(Typography.Input1)`
  border-radius: 5px;
  margin-right: 1rem;
  padding: 0.4rem;
  width: 100%;
`

export const OptionsContainer = styled.div`
  background-color: ${colors.black};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  position: absolute;
  top: 100%;
  width: 100%;

  & > p:not(:last-child) {
    margin-bottom: 0.6rem;
  }
`

export const Option = styled.div``

export const OptionLabel = styled<{ valid: boolean }>(Typography.Body1)`
  color: ${colors.white};
  margin: 0;

  &:hover {
    cursor: ${(props: any) => (props.valid ? 'pointer' : '')};
    text-decoration: ${(props: any) => (props.valid ? 'underline' : 'none')};
  }
`
