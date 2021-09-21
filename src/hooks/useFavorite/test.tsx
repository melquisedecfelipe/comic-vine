/* eslint-disable @typescript-eslint/no-var-requires */
import { act, renderHook } from '@testing-library/react-hooks'

import mockCharacters from 'mock/characters'

import { FavoriteProvider, FavoriteProviderProps, useFavorite } from '.'

const wrapper = ({ children }: FavoriteProviderProps) => (
  <FavoriteProvider>{children}</FavoriteProvider>
)

describe('useFavorite', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should return favorites characters', async () => {
    const { result } = renderHook(() => useFavorite(), {
      wrapper
    })

    expect(result.current.favorites).toStrictEqual([])
  })

  it('should add character in favorites', async () => {
    const { result } = renderHook(() => useFavorite(), {
      wrapper
    })

    act(() => {
      result.current.handleAddFavorite(mockCharacters[0])
    })

    expect(result.current.favorites).toStrictEqual([mockCharacters[0]])
  })

  it('should remove character in favorites', async () => {
    const { result } = renderHook(() => useFavorite(), {
      wrapper
    })

    act(() => {
      result.current.handleAddFavorite(mockCharacters[0])
    })

    act(() => {
      result.current.handleAddFavorite(mockCharacters[1])
    })

    expect(result.current.favorites).toStrictEqual([
      mockCharacters[0],
      mockCharacters[1]
    ])

    act(() => {
      result.current.handleRemoveFavorite(mockCharacters[0].id)
    })

    expect(result.current.favorites).toStrictEqual([mockCharacters[1]])
  })

  it('should character is a favorite', async () => {
    const { result } = renderHook(() => useFavorite(), {
      wrapper
    })

    act(() => {
      result.current.handleAddFavorite(mockCharacters[0])
    })

    expect(result.current.isFavorite(mockCharacters[0].id)).toBe(true)
  })

  it('should character is not a favorite', async () => {
    const { result } = renderHook(() => useFavorite(), {
      wrapper
    })

    expect(result.current.isFavorite(mockCharacters[0].id)).toBe(false)
  })
})
