import { ArtistType } from '@/types/types'
import { getItem, saveItem } from '@/utils/localStorage'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface FavoriteContext {
  favorites: ArtistType[]
  addFavorite(artist: ArtistType): void
  removeFavorite(id: string | number): void
}

const INITIAL: FavoriteContext = {
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
}

export const AppContext = createContext(INITIAL)

export const useAppContext = () => useContext(AppContext)

const STORAGE_KEY = 'APP_CONTEXT'

const AppProvider: React.FC<{}> = ({ children }) => {
  const [favorites, setFavorites] = useState<ArtistType[]>([])

  const retrieveContext = () => {
    const payload = getItem(STORAGE_KEY)
    if (payload) setFavorites(payload?.favorites)
  }

  const saveContext = (payload: any) => {
    saveItem(STORAGE_KEY, payload)
  }

  const addFavorite = (artist: ArtistType) => {
    const hasArtist = favorites.some((favorite) => favorite.id === artist.id)
    if (!hasArtist) {
      const newFavorites = [...favorites, artist]
      saveContext({ favorites: newFavorites })
      setFavorites(newFavorites)
    }
  }

  const removeFavorite = (id: string | number) => {
    const newFavorites = favorites.filter((item) => item.id !== id)
    saveContext({ favorites: newFavorites })
    setFavorites(newFavorites)
  }

  useEffect(() => {
    retrieveContext()
  }, [])

  return (
    <AppContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
