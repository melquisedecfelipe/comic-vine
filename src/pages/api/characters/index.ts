import { NextApiRequest, NextApiResponse } from 'next'

import { charactersMapper } from 'utils/characterMapper'

import { BBFCharactersResponse, CharactersResponse } from 'types/characters'

import api from '../'

const bffCharactersHandler = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const {
    method,
    query: { filter, limit, page }
  } = request

  switch (method) {
    case 'GET':
      api
        .get<BBFCharactersResponse>('characters', {
          params: {
            api_key: 'cd2a0bcafaff4518a30153326ebfb3bb971c5bba',
            format: 'json',
            limit,
            offset: Number(page) * Number(limit),
            ...(filter && { filter: `name:${filter}` })
          }
        })
        .then(({ data }) => {
          const { limit, number_of_total_results, offset, results } = data

          const parsedData = {
            limit,
            offset,
            total: number_of_total_results,
            totalPages: Math.ceil(number_of_total_results / Number(limit)),
            results: charactersMapper(results)
          } as CharactersResponse

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

export default bffCharactersHandler
