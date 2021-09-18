import { NextApiRequest, NextApiResponse } from 'next'

import { characterMapper } from 'utils/characterMapper'

import { BBFCharacterResponse, CharacterResponse } from 'types/characters'

import api from '../'

const bffCharacterHandler = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const {
    method,
    query: { id }
  } = request

  switch (method) {
    case 'GET':
      api
        .get<BBFCharacterResponse>(`/character/4005-${id}/`, {
          params: {
            api_key: 'cd2a0bcafaff4518a30153326ebfb3bb971c5bba',
            format: 'json'
          }
        })
        .then(({ data }) => {
          const { results } = data

          const parsedData = {
            results: characterMapper(results)
          } as CharacterResponse

          response.status(200).json(parsedData)
        })
        .catch(error => response.json({ message: error.message }))

      break
    default:
      response.setHeader('Allow', ['GET'])
      response.status(405).end(`Method ${method} Not Allowed`)
      break
  }
}

export default bffCharacterHandler
