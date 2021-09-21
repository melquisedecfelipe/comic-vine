/* eslint-disable @typescript-eslint/no-var-requires */
import { act } from 'react-dom/test-utils'

import { renderHook } from '@testing-library/react-hooks'

import { CharacterProvider, CharacterProviderProps, useCharacter } from '.'
import mock from './mock'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

import { QueryClient, QueryClientProvider } from 'react-query'
const useQuery = jest.spyOn(require('react-query'), 'useQuery')

const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: { name: '', page: 1 }
}))

const queryClient = new QueryClient()

useQuery.mockImplementation(() => ({
  data: {
    limit: 10,
    offset: 0,
    results: mock.data,
    total: mock.data.length,
    totalPages: 1
  },
  isFetching: false,
  isLoading: false
}))

const wrapper = ({ children }: CharacterProviderProps) => (
  <QueryClientProvider client={queryClient}>
    <CharacterProvider>{children}</CharacterProvider>
  </QueryClientProvider>
)

describe('useCharacter', () => {
  it('should render the use character', async () => {
    const { result } = renderHook(() => useCharacter(), {
      wrapper
    })

    expect(result.current.data?.length).toBe(2)
  })

  it('should render next page on call function', async () => {
    const { result } = renderHook(() => useCharacter(), {
      wrapper
    })

    result.current.handlePage('NEXT')

    act(() => {
      expect(push).toHaveBeenCalledWith({ pathname: '/', query: { page: 2 } })
    })
  })

  it('should render previous page on call function', async () => {
    const { result } = renderHook(() => useCharacter(), {
      wrapper
    })

    result.current.handlePage('PREVIOUS')

    act(() => {
      expect(push).toHaveBeenCalledWith({ pathname: '/', query: { page: 0 } })
    })
  })

  it('should submit form on call function', async () => {
    const { result } = renderHook(() => useCharacter(), {
      wrapper
    })

    result.current.handleSubmit('Hello')

    act(() => {
      expect(push).toHaveBeenCalledWith({
        pathname: '/',
        query: { name: 'Hello', page: 1 }
      })
    })
  })
})
