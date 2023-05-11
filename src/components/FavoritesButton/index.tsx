import React from 'react'

import { useAppContext } from '@/providers/AppProvider'

import { ArtistType } from '@/types/types'

import { AppContext } from '@/providers/AppProvider'

import * as S from './styles'

interface FavoriteButtonProps {
  artist: ArtistType
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ artist }) => {
  const { addFavorite, removeFavorite } = useAppContext()

  const onAdd = () => {
    addFavorite(artist)
  }

  const onRemove = () => {
    removeFavorite(artist.id)
  }

  return (
    <AppContext.Consumer>
      {({ favorites }) => {
        const isAdded = favorites.find((item) => item.id === artist.id)
        const label = isAdded ? 'Remove from Favorites' : 'Add to Favorites'
        const click = isAdded ? onRemove : onAdd

        return <S.Container onClick={click}>{label}</S.Container>
      }}
    </AppContext.Consumer>
  )
}

export default FavoriteButton
