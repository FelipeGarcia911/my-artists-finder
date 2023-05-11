import React from 'react'
import { navigate } from 'gatsby-link'

import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { AppContext } from '@/providers/AppProvider'

import ROUTES from '@/constants/routes'

import * as S from './styles'

const FavoriteIcon: React.FC<{}> = () => {
  const handleOnClick = () => {
    navigate(ROUTES.FAVORITES)
  }
  return (
    <AppContext.Consumer>
      {({ favorites }) => (
        <>
          {Boolean(favorites?.length) && (
            <S.Container onClick={handleOnClick}>
              <S.Icon icon={faHeart} size="2x" />
              <S.Indicator>{favorites.length}</S.Indicator>
            </S.Container>
          )}
        </>
      )}
    </AppContext.Consumer>
  )
}

export default FavoriteIcon
