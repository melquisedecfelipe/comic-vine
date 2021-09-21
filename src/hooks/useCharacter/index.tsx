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

export type TypeProps = 'NEXT' | 'PREVIOUS'

export type CharacterContextData = {
  data?: Character[]
  filter: FilterProps
  handlePage: (type: TypeProps) => void
  handleSubmit: (value?: string) => void
  isFetching: boolean
  isLoading: boolean
  setName: (value: string) => void
  totalItems?: number
  totalPages?: number
}

export const CharacterContextDefaultValues = {
  data: [],
  filter: { limit: 10, name: '', page: 1 },
  handlePage: () => null,
  handleSubmit: () => null,
  isFetching: false,
  isLoading: false,
  setName: () => false,
  totalItems: 0,
  totalPages: 0
} as CharacterContextData

export const CharacterContext = createContext<CharacterContextData>(
  CharacterContextDefaultValues
)

export type CharacterProviderProps = {
  children: React.ReactNode
}

const CharacterProvider = ({ children }: CharacterProviderProps) => {
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
    value => {
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
    <CharacterContext.Provider
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
    </CharacterContext.Provider>
  )
}

const useCharacter = () => useContext(CharacterContext)

export { CharacterProvider, useCharacter }
