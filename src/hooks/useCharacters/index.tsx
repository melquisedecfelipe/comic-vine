import { useRouter } from 'next/router'

import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback
} from 'react'
import { useQuery } from 'react-query'

import { getCharacters } from 'services/api'

import { QUERY_CHARACTERS } from 'config/constants'

import { Character } from 'types/characters'

type FilterProps = {
  limit: number
  name: string
  page: number
}

type TypeProps = 'NEXT' | 'PREVIOUS'

export type CharactersContextData = {
  data?: Character[]
  filter: FilterProps
  handlePage: (type: TypeProps) => void
  handleSubmit: (event: React.FormEvent, value: string) => void
  isFetching: boolean
  isLoading: boolean
  setName: (value: string) => void
  totalItems?: number
  totalPages?: number
}

export const CharactersContextDefaultValues = {
  data: [],
  filter: { limit: 10, name: '', page: 1 },
  handlePage: () => null,
  handleSubmit: () => null,
  isFetching: false,
  isLoading: false,
  setName: () => null,
  totalItems: 0,
  totalPages: 0
} as CharactersContextData

export const CharactersContext = createContext<CharactersContextData>(
  CharactersContextDefaultValues
)

export type CharactersProviderProps = {
  children: React.ReactNode
}

const CharactersProvider = ({ children }: CharactersProviderProps) => {
  const { push, query } = useRouter()

  const [limit] = useState(50)
  const [name, setName] = useState('')
  const [page, setPage] = useState(1)

  const { data, isFetching, isLoading } = useQuery(
    [QUERY_CHARACTERS, name, page],
    () =>
      getCharacters({
        ...(name && { filter: name }),
        limit,
        page: page - 1
      }),
    {
      refetchOnWindowFocus: false
    }
  )

  const handlePage = useCallback(
    (type: 'NEXT' | 'PREVIOUS') => {
      const currentName = query.name as string
      const currentPage = Number(query.page) || page

      push({
        pathname: '/',
        query: {
          ...(currentName && { name: currentName }),
          page: type === 'NEXT' ? currentPage + 1 : currentPage - 1
        }
      })
    },
    [page, push, query.name, query.page]
  )

  const handleSubmit = useCallback(
    (event: React.FormEvent, value) => {
      event.preventDefault()

      push({
        pathname: '/',
        query: { name: value, page: 1 }
      })
    },
    [push]
  )

  useEffect(() => {
    if (query.name) {
      const name = query.name as string

      setName(name)
    }
  }, [query.name])

  useEffect(() => {
    if (query.page) {
      const queryPage = Number(query.page)

      setPage(queryPage)
    }
  }, [query.page])

  return (
    <CharactersContext.Provider
      value={{
        data: data?.results,
        filter: { limit, name, page },
        handlePage,
        handleSubmit,
        isFetching: isFetching,
        isLoading: isLoading,
        setName,
        totalItems: data?.total,
        totalPages: data?.totalPages
      }}
    >
      {children}
    </CharactersContext.Provider>
  )
}

const useCharacters = () => useContext(CharactersContext)

export { CharactersProvider, useCharacters }
