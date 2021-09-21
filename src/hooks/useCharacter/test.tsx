/* eslint-disable @typescript-eslint/no-var-requires */
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

describe('useCharacter', () => {
  it('should render the use character', async () => {
    const queryClient = new QueryClient()

    const wrapper = ({ children }: CharacterProviderProps) => (
      <QueryClientProvider client={queryClient}>
        <CharacterProvider>{children}</CharacterProvider>
      </QueryClientProvider>
    )

    const { result } = renderHook(() => useCharacter(), {
      wrapper
    })

    expect(result.current.data?.length).toBe(2)
  })
})
