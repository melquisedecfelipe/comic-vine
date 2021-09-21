import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback
} from 'react'

import { getStorageItem, setStorageItem } from 'utils/localStorage'

import { FAVORITE_STORAGE } from 'config/constants'

import { Character } from 'types/characters'

export type FavoriteContextData = {
  favorites: Character[]
  handleAddFavorite: (character: Character) => void
  handleRemoveFavorite: (id: number) => void
  isFavorite: (id: number) => boolean
}

export const FavoriteContextDefaultValues = {
  favorites: [],
  handleAddFavorite: () => null,
  handleRemoveFavorite: () => null,
  isFavorite: () => false
} as FavoriteContextData

export const FavoriteContext = createContext<FavoriteContextData>(
  FavoriteContextDefaultValues
)

export type FavoriteProviderProps = {
  children: React.ReactNode
}

const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
  const [favorites, setFavorites] = useState<Character[]>([])

  const handleAddFavorite = useCallback(
    (character: Character) => {
      handleSave([...favorites, character])
    },
    [favorites]
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

    setStorageItem(FAVORITE_STORAGE, characters)
  }

  const isFavorite = useCallback(
    (id: number) => {
      const favoriteFilter = favorites.filter(
        charactrer => charactrer.id === id
      )

      return !!favoriteFilter.length
    },
    [favorites]
  )

  useEffect(() => {
    const favoritesStorage = getStorageItem(FAVORITE_STORAGE)

    if (favoritesStorage) {
      setFavorites(favoritesStorage)
    }
  }, [])

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        handleAddFavorite,
        handleRemoveFavorite,
        isFavorite
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}

const useFavorite = () => useContext(FavoriteContext)

export { FavoriteProvider, useFavorite }
