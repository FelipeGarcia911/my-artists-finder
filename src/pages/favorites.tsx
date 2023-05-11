import React from 'react'

import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

import { styled, theme } from '@/styles/theme'

import logoImage from '@/images/logo.png'
import bgImage from '@/images/background.jpg'

import Typography from '@/styles/typography'

import Providers from '@/providers/Providers'
import { AppContext } from '@/providers/AppProvider'
import SEO from '@/components/Common/SEO'
import GenericArtistList from '@/components/GenericArtistList'

const Title = styled(Typography.Title2)`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
  color: ${theme.colors.gray};
`

const FavoritesPage: React.FC<{}> = () => {
  return (
    <Providers>
      <SEO title="Favorites" />
      <Navbar />
      <Layout>
        <Hero bgImage={bgImage} logoImage={logoImage} />
        <Title>My Favorites</Title>
        <AppContext.Consumer>
          {({ favorites }) => <GenericArtistList artist={favorites} />}
        </AppContext.Consumer>
      </Layout>
    </Providers>
  )
}

export default FavoritesPage
