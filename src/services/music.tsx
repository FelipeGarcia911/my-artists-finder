import _ from 'lodash'

import httpRequest, { HTTPRequestProps } from '@/utils/http'
import { API, VERSION } from '@/constants/api'

const searchGenres = async (query: string, limit = 10) => {
  const payload: HTTPRequestProps = {
    method: 'GET',
    url: `${VERSION}${API}genres?q=${query}&limit=${limit}`,
  }
  let response = await httpRequest(payload)
  if (response) response = _.get(response, 'data')

  return response
}

const getArtistsByGenreId = async (id: string | number) => {
  const payload: HTTPRequestProps = {
    method: 'GET',
    url: `${VERSION}${API}genres/${id}/artists`,
  }
  let response = await httpRequest(payload)
  if (response) response = _.get(response, 'data')

  return response
}

const getArtistById = async (id: string | number) => {
  const payload: HTTPRequestProps = {
    method: 'GET',
    url: `${VERSION}${API}artists/${id}`,
  }
  let response = await httpRequest(payload)
  if (response) response = _.get(response, 'data')

  return response
}

const getSimilarArtistsById = async (id: string | number) => {
  const payload: HTTPRequestProps = {
    method: 'GET',
    url: `${VERSION}${API}artists/${id}/similar`,
  }
  let response = await httpRequest(payload)
  if (response) response = _.get(response, 'data')

  return response
}

const api = {
  searchGenres,
  getArtistsByGenreId,
  getArtistById,
  getSimilarArtistsById,
}

export default api
