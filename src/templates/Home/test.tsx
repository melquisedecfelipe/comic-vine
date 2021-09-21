import { CharacterContextDefaultValues } from 'hooks/useCharacter'
import mockCharacter from 'hooks/useCharacter/mock'
import { FavoriteContextDefaultValues } from 'hooks/useFavorite'
import mockFavorite from 'hooks/useFavorite/mock'

import { render, screen } from 'utils/testUtils'

import Home from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const push = jest.fn()

useRouter.mockImplementation(() => ({
  push
}))

describe('<Home />', () => {
  it('should render the home', () => {
    const { container } = render(<Home />)

    expect(container).toBeInTheDocument()
  })

  it('should render the loading component', () => {
    const characterProviderProps = {
      ...CharacterContextDefaultValues,
      isLoading: true
    }

    render(<Home />, { characterProviderProps })

    expect(screen.getByRole('svg', { name: /loading/i })).toBeInTheDocument()
  })

  it('should render the loading full page component', () => {
    const characterProviderProps = {
      ...CharacterContextDefaultValues,
      isFetching: true
    }

    render(<Home />, { characterProviderProps })

    expect(screen.getByRole('svg', { name: /loading/i })).toHaveStyle({
      position: 'fixed'
    })
  })

  it('should render the filter name', () => {
    const characterProviderProps = {
      ...CharacterContextDefaultValues,
      filter: { limit: 10, name: 'Hello', page: 1 }
    }

    render(<Home />, { characterProviderProps })

    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('should render the favorites chracters', () => {
    const characterProviderProps = {
      ...CharacterContextDefaultValues,
      data: mockCharacter.data,
      filter: { limit: 10, name: '', page: 1 },
      totalItems: mockCharacter.data.length,
      totalPages: 1
    }

    const favoriteProviderProps = {
      ...FavoriteContextDefaultValues,
      favorites: mockFavorite
    }

    render(<Home />, { characterProviderProps, favoriteProviderProps })

    expect(screen.getByText('Favorites')).toBeInTheDocument()
  })

  it('should render the paginate component', () => {
    const characterProviderProps = {
      ...CharacterContextDefaultValues,
      data: mockCharacter.data,
      filter: { limit: 10, name: '', page: 1 },
      totalItems: mockCharacter.data.length,
      totalPages: 2
    }

    const favoriteProviderProps = {
      ...FavoriteContextDefaultValues,
      favorites: mockFavorite
    }

    render(<Home />, { characterProviderProps, favoriteProviderProps })

    expect(
      screen.getByRole('button', { name: /previous/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })
})
