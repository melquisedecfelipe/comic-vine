import axios from 'axios'

import { CharactersResponse } from 'types/characters'

const api = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

type GetCharactersProps = {
  filter?: string
  limit?: number
  page?: number
}

export const getCharacters = async ({
  filter,
  limit = 20,
  page = 0
}: GetCharactersProps) => {
  const { data } = await api.get<CharactersResponse>('characters', {
    params: { filter, limit, page }
  })

  return data
}

export const getCharacter = async (id: string) => {
  const { data } = await api.get<CharactersResponse>(`characters/${id}`)

  return data
}
