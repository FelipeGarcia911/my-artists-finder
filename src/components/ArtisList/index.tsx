import React, { useCallback, useEffect, useState } from 'react'
import _ from 'lodash'

import GenericArtistList from '@/components/GenericArtistList'

import { ArtistType, GenreType } from '@/types/types'

import useAPI from '@/hooks/useAPI'

interface ArtistListProps {
  genre?: GenreType
}

const ArtistList: React.FC<ArtistListProps> = ({ genre }) => {
  const { loading, searchArtistsByGenre } = useAPI()

  const [artist, setArtist] = useState<ArtistType[]>([])

  const gerArtists = async (id: string | number) => {
    const response = await searchArtistsByGenre(id)
    if (response) setArtist(response)
  }

  const debouncedGetArtist = useCallback(_.debounce(gerArtists, 300), [])

  useEffect(() => {
    if (genre) debouncedGetArtist(genre.id)
  }, [genre])

  return <GenericArtistList loading={loading} artist={artist} />
}

export default ArtistList
