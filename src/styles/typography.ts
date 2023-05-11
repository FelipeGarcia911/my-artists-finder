import { styled } from '@/styles/theme'
import fonts from './fonts'

const Title = styled.h1`
  font-family: ${fonts.body};
  font-size: 2.5rem;
  font-weight: 500;
`

const Title2 = styled.h1`
  font-family: ${fonts.body};
  font-size: 2.5rem;
  font-weight: 200;
`

const Title3 = styled.h1`
  font-family: ${fonts.body};
  font-size: 3rem;
  font-weight: 500;
`

const Subtitle = styled.h3`
  font-family: ${fonts.body};
  font-size: 1.5rem;
  font-weight: 400;
`

const Body1 = styled.p`
  font-family: ${fonts.body};
  font-size: 1.1rem;
  font-weight: 300;
`

const Input1 = styled.input`
  font-family: ${fonts.body};
  font-size: 1rem;
  font-weight: 400;
`

const Badge = styled.span`
  font-family: ${fonts.body};
  font-size: 0.8rem;
  font-weight: 400;
`

const Typography = { Title, Title2, Title3, Subtitle, Body1, Input1, Badge }

export default Typography
