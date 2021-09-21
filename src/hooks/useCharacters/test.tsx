/* eslint-disable @typescript-eslint/no-var-requires */
import { renderHook } from '@testing-library/react-hooks'

import { CharactersProvider, CharactersProviderProps, useCharacters } from '.'
import mock from './mock'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

import { QueryClient, QueryClientProvider } from 'react-query'
const useQuery = jest.spyOn(require('react-query'), 'useQuery')

const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: { name: '', page: 1 }
}))

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

const queryClient = new QueryClient()

const wrapper = ({ children }: CharactersProviderProps) => (
  <QueryClientProvider client={queryClient}>
    <CharactersProvider>{children}</CharactersProvider>
  </QueryClientProvider>
)

describe('useCharacters', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should render the use characters', async () => {
    const { result } = renderHook(() => useCharacters(), {
      wrapper
    })

    expect(result.current.data?.length).toBe(2)
  })
})
