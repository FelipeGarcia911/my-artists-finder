import { ArtistGenre } from '@/types/types'

export const getMainGenre = (genres: ArtistGenre[]) => {
  let response = null

  const isValid = Boolean(genres && genres.length)
  if (isValid) response = genres.find(({ is_primary }) => is_primary)

  return response
}

export const getSecondaryGenres = (genres: ArtistGenre[]) => {
  let response = null

  const isValid = Boolean(genres && genres.length)
  if (isValid) response = genres.filter(({ is_primary }) => !is_primary)

  return response
}
