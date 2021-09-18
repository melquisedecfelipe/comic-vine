import axios from 'axios'

import { CharactersResponse } from 'types/characters'

const api = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

export const getCharacters = async (page = 0, limit = 20) => {
  const { data } = await api.get<CharactersResponse>('characters', {
    params: { page, limit }
  })

  return data
}

export const getCharacter = async (id: string) => {
  const { data } = await api.get<CharactersResponse>(`characters/${id}`)

  return data
}
