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

import { getStorageItem, setStorageItem } from 'utils/localStorage'

import { CHARACTERS_STORAGE, QUERY_CHARACTERS } from 'config/constants'

import { Character } from 'types/characters'

type FilterProps = {
  limit: number
  name: string
  page: number
}

export type TypeProps = 'NEXT' | 'PREVIOUS'

export type CharactersContextData = {
  data?: Character[]
  favorites: Character[]
  filter: FilterProps
  handleAddFavorite: (character: Character) => void
  handlePage: (type: TypeProps) => void
  handleRemoveFavorite: (id: number) => void
  handleSubmit: (event: React.FormEvent, value: string) => void
  isFavorite: (id: number) => boolean
  isFetching: boolean
  isLoading: boolean
  setName: (value: string) => void
  totalItems?: number
  totalPages?: number
}

export const CharactersContextDefaultValues = {
  data: [],
  favorites: [],
  filter: { limit: 10, name: '', page: 1 },
  handleAddFavorite: () => null,
  handlePage: () => null,
  handleRemoveFavorite: () => null,
  handleSubmit: () => null,
  isFavorite: () => false,
  isFetching: false,
  isLoading: false,
  setName: () => false,
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

  const [favorites, setFavorites] = useState<Character[]>(() => {
    const favoritesStorage = getStorageItem(CHARACTERS_STORAGE)

    if (favoritesStorage) return favoritesStorage

    return []
  })

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

  const handleAddFavorite = useCallback(
    (character: Character) => {
      handleSave([...favorites, character])
    },
    [favorites]
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

  const handleRemoveFavorite = useCallback(
    (id: number) => {
      const newFavorites = favorites.filter(character => character.id !== id)

      handleSave(newFavorites)
    },
    [favorites]
  )

  const handleSave = (characters: Character[]) => {
    setFavorites(characters)

    setStorageItem(CHARACTERS_STORAGE, characters)
  }

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

  const isFavorite = useCallback(
    (id: number) => {
      if (id) {
        const favoriteFilter = favorites.filter(
          charactrer => charactrer.id === id
        )

        return !!favoriteFilter.length
      }

      return false
    },
    [favorites]
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
        favorites,
        filter: { limit, name, page },
        handleAddFavorite,
        handlePage,
        handleRemoveFavorite,
        handleSubmit,
        isFavorite,
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
