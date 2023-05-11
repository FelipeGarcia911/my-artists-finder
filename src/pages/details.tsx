import React, { useEffect, useState } from 'react'
import { parse } from 'query-string'

import Layout from '@/components/Layout'
import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'
import SEO from '@/components/Common/SEO'
import ArtistDetails from '@/components/ArtistDetails'

import Providers from '@/providers/Providers'

import useAPI from '@/hooks/useAPI'

import { ArtistType } from '@/types/types'

const DetailsPage: React.FC<{}> = (props) => {
  const { loading, getArtistDetails } = useAPI()

  const [artist, setArtist] = useState<ArtistType>()

  const getArtistId = (): string => {
    const urlParams = parse(props.location.search)
    return `${urlParams?.id}`
  }

  const getArtist = async (id: string) => {
    const response = await getArtistDetails(id)
    if (response) setArtist(response)
  }

  useEffect(() => {
    const id = getArtistId()
    if (id) getArtist(id)
  }, [props.location])

  return (
    <Providers>
      <SEO title="Artist Details" />
      <Navbar />
      <Layout>
        <Loader loading={loading}>
          {artist ? <ArtistDetails artist={artist} /> : null}
        </Loader>
      </Layout>
    </Providers>
  )
}

export default DetailsPage
