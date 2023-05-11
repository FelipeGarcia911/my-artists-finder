export interface GenreType {
  id: number
  name: string
  parent_id: number
}

export interface ArtistGenre {
  id: number
  name: string
  is_primary: boolean
}

export interface ArtistType {
  id: number
  image: string
  name: string
  popularity: number
  genres: ArtistGenre[]
}
