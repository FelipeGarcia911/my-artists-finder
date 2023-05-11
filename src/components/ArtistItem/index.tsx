import React from 'react'
import { navigate } from 'gatsby-link'

import FavoriteButton from '@/components/FavoritesButton'

import ROUTES from '@/constants/routes'

import { ArtistType } from '@/types/types'

import * as S from './styles'
import { getMainGenre } from '@/utils/utils'

interface ArtistItemProps {
  artist: ArtistType
}

const ArtistItem: React.FC<ArtistItemProps> = (props) => {
  const { artist } = props
  const { name, image, id, genres = [] } = artist

  const genre = getMainGenre(genres)?.name

  const handleOnClick = () => {
    const route = `${ROUTES.DETAILS}?id=${id}`

    navigate(route)
  }

  return (
    <S.Container>
      <S.Content>
        <S.Image src={image} alt={name} height="250px" />
      </S.Content>
      <S.Content>
        <S.Links onClick={handleOnClick}>
          <S.Title>{name}</S.Title>
          <S.Genre>{genre}</S.Genre>
        </S.Links>
        <FavoriteButton artist={artist} />
      </S.Content>
    </S.Container>
  )
}

export default ArtistItem
