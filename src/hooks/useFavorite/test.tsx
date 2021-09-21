/* eslint-disable @typescript-eslint/no-var-requires */
import { act, renderHook } from '@testing-library/react-hooks'

import { FavoriteProvider, FavoriteProviderProps, useFavorite } from '.'
import mock from './mock'

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
      result.current.handleAddFavorite(mock[0])
    })

    expect(result.current.favorites).toStrictEqual([mock[0]])
  })

  it('should remove character in favorites', async () => {
    const { result } = renderHook(() => useFavorite(), {
      wrapper
    })

    act(() => {
      result.current.handleAddFavorite(mock[0])
    })

    act(() => {
      result.current.handleAddFavorite(mock[1])
    })

    expect(result.current.favorites).toStrictEqual([mock[0], mock[1]])

    act(() => {
      result.current.handleRemoveFavorite(mock[0].id)
    })

    expect(result.current.favorites).toStrictEqual([mock[1]])
  })

  it('should character is a favorite', async () => {
    const { result } = renderHook(() => useFavorite(), {
      wrapper
    })

    act(() => {
      result.current.handleAddFavorite(mock[0])
    })

    expect(result.current.isFavorite(mock[0].id)).toBe(true)
  })

  it('should character is not a favorite', async () => {
    const { result } = renderHook(() => useFavorite(), {
      wrapper
    })

    expect(result.current.isFavorite(mock[0].id)).toBe(false)
  })
})
