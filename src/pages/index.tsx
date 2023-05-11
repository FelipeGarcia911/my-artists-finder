import React, { useState } from 'react'

import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import Navbar from '@/components/Navbar'

import { styled, theme } from '@/styles/theme'

import logoImage from '@/images/logo.png'
import bgImage from '@/images/background.jpg'

import Typography from '@/styles/typography'
import Providers from '@/providers/Providers'
import SEO from '@/components/Common/SEO'
import { GenreType } from '@/types/types'
import ArtistList from '@/components/ArtisList'

const Title = styled(Typography.Title2)`
  text-align: center;
  margin: 2rem 0;
  color: ${theme.colors.gray};
`

const IndexPage: React.FC<{}> = () => {
  const [option, setOption] = useState<GenreType>()

  const handleOnOptionSelected = (option: GenreType) => {
    setOption(option)
  }

  return (
    <Providers>
      <SEO title="Home" />
      <Navbar />
      <Layout>
        <Hero bgImage={bgImage} logoImage={logoImage}>
          <SearchBar onOptionSelected={handleOnOptionSelected} />
        </Hero>
        <Title>Suggested Artists</Title>
        <ArtistList genre={option} />
      </Layout>
    </Providers>
  )
}

export default IndexPage
