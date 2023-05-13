import React from 'react'

import { PageTitle } from '@/components/Common/Titles'
import BasePage from '@/components/BasePage'
import GenericArtistList from '@/components/GenericArtistList'
import Hero from '@/components/Hero'

import { AppContext } from '@/providers/AppProvider'

import logoImage from '@/images/logo.png'
import bgImage from '@/images/background.jpg'

const FavoritesPage: React.FC<{}> = () => {
  return (
    <BasePage title="My Favorites">
      <Hero bgImage={bgImage} logoImage={logoImage} />
      <PageTitle>My Favorites</PageTitle>
      <AppContext.Consumer>
        {({ favorites }) => <GenericArtistList artist={favorites} />}
      </AppContext.Consumer>
    </BasePage>
  )
}

export default FavoritesPage
