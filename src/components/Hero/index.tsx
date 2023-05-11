import React from 'react'
import * as S from './styles'

interface HeroProps {
  bgImage?: string
  children?: React.ReactNode
  logoImage?: string
}

const Hero: React.FC<HeroProps> = ({ logoImage, bgImage, children }) => {
  return (
    <S.Container bgImage={bgImage}>
      {logoImage ? <img src={logoImage} alt="Site's Logo" /> : null}
      {children}
    </S.Container>
  )
}

export default Hero
