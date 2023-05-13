import React, { useState } from 'react'

import { PageTitle } from '@/components/Common/Titles'
import ArtistList from '@/components/ArtisList'
import BasePage from '@/components/BasePage'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'

import { GenreType } from '@/types/types'

import logoImage from '@/images/logo.png'
import bgImage from '@/images/background.jpg'

const IndexPage: React.FC<{}> = () => {
  const [option, setOption] = useState<GenreType>()

  const handleOnOptionSelected = (option: GenreType) => {
    setOption(option)
  }

  return (
    <BasePage title="Home">
      <Hero bgImage={bgImage} logoImage={logoImage}>
        <SearchBar onOptionSelected={handleOnOptionSelected} />
      </Hero>
      <PageTitle>Suggested Artists</PageTitle>
      <ArtistList genre={option} />
    </BasePage>
  )
}

export default IndexPage
