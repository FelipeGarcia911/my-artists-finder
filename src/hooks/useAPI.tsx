import { useState } from 'react'

import api from '@/services/music'

const useAPI = () => {
  const [loading, setLoading] = useState(false)

  const searchGenre = async (string: string): Promise<any | null> => {
    let response = null
    try {
      setLoading(true)
      const result = await api.searchGenres(string)
      response = result
    } catch (error) {
      console.error('Hook', error)
    } finally {
      setLoading(false)
    }

    return response
  }

  const searchArtistsByGenre = async (
    id: string | number
  ): Promise<any | null> => {
    let response = null
    try {
      setLoading(true)
      const result = await api.getArtistsByGenreId(id)
      response = result
    } catch (error) {
      console.error('Hook', error)
    } finally {
      setLoading(false)
    }

    return response
  }

  const getArtistDetails = async (id: string | number): Promise<any | null> => {
    let response = null
    try {
      setLoading(true)
      const result = await api.getArtistById(id)
      response = result[0]
    } catch (error) {
      console.error('Hook', error)
    } finally {
      setLoading(false)
    }

    return response
  }

  const getSimilarArtist = async (id: string | number): Promise<any | null> => {
    let response = null
    try {
      setLoading(true)
      const result = await api.getSimilarArtistsById(id)
      response = result
    } catch (error) {
      console.error('Hook', error)
    } finally {
      setLoading(false)
    }

    return response
  }

  return {
    loading,
    getArtistDetails,
    getSimilarArtist,
    searchArtistsByGenre,
    searchGenre,
  }
}

export default useAPI
