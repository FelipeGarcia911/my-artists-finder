import React, { useEffect, useState } from 'react'

import { ArtistType } from '@/types/types'

import GenericArtistList from '@/components/GenericArtistList'

import useAPI from '@/hooks/useAPI'

import * as S from './styles'
import { getMainGenre, getSecondaryGenres } from '@/utils/utils'

interface DetailsProps {
  artist: ArtistType
}

const ArtistDetails: React.FC<DetailsProps> = (props) => {
  const {
    artist: { id, name, image, genres, popularity },
  } = props

  const [related, setRelated] = useState<ArtistType[]>([])

  const { loading, getSimilarArtist } = useAPI()

  const primary = getMainGenre(genres)?.name
  const secondary = getSecondaryGenres(genres)?.map(({ name }) => name).join(', ')

  const getRelatedArtists = async (id: string | number) => {
    const response = await getSimilarArtist(id)
    if (response) setRelated(response)
  }

  useEffect(() => {
    getRelatedArtists(id)
  }, [id])

  return (
    <S.Container>
      <S.Header>
        <S.ImageContainer>
          <S.Image src={image} alt={name} height="400px" />
        </S.ImageContainer>
        <S.DataContainer>
          <S.Title>{name}</S.Title>
          <S.Details>
            <S.Label>Primary Genre: {primary}</S.Label>
            <S.Label>Popularity: {popularity}</S.Label>
            <S.Label>Additional Genres: {secondary}</S.Label>
          </S.Details>
        </S.DataContainer>
      </S.Header>
      <S.List>
        <S.Subtitle>Related Artists</S.Subtitle>
        <GenericArtistList artist={related} loading={loading} />
      </S.List>
    </S.Container>
  )
}

export default ArtistDetails
