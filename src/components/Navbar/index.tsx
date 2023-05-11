import React from 'react'
import { navigate } from 'gatsby'

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import logoImage from '@/images/logo.png'

import FavoriteIcon from '@/components/FavoriteIcon'

import ROUTES from '@/constants/routes'

import * as S from './styles'

const Navbar: React.FC = () => {
  const handleOnReturn = () => {
    navigate(ROUTES.HOME)
  }

  const handleOnHome = () => {
    navigate(ROUTES.HOME)
  }

  return (
    <S.Container>
      <S.Logo src={logoImage} onClick={handleOnHome} />
      <S.Icons>
        <FavoriteIcon />
        <S.Icon icon={faArrowLeft} size="2x" onClick={handleOnReturn} />
      </S.Icons>
    </S.Container>
  )
}

export default Navbar
