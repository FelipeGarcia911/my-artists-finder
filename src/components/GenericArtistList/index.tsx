import React, { lazy } from 'react'

import SuspenseComponent from '@/components/Suspense'

import { Container, NoResults, GridList } from './styles'
import { ArtistType } from '@/types/types'

const ArtistItem = lazy(() => import('@/components/ArtistItem'))

interface GenericArtistListProps {
  artist: ArtistType[]
  loading?: boolean
}

const GenericArtistList: React.FC<GenericArtistListProps> = (props) => {
  const { artist, loading = false } = props
  const hasArtist = artist && artist.length

  return (
    <Container loading={loading}>
      {hasArtist ? (
        <GridList>
          {artist.map((artist, idx) => (
            <SuspenseComponent key={idx}>
              <ArtistItem key={idx} artist={artist} />
            </SuspenseComponent>
          ))}
        </GridList>
      ) : (
        <NoResults>No artist</NoResults>
      )}
    </Container>
  )
}

export default GenericArtistList
