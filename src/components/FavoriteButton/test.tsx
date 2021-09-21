import userEvent from '@testing-library/user-event'

import { FavoriteContextDefaultValues } from 'hooks/useFavorite'

import { render, screen } from 'utils/testUtils'

import mockCharacter from 'mock/character'

import FavoriteButton, { FavoriteButtonProps } from '.'

const handleAddFavorite = jest.fn()
const handleRemoveFavorite = jest.fn()

const props = {
  character: mockCharacter
} as FavoriteButtonProps

describe('<FavoriteButton />', () => {
  it('should render the favorite button', () => {
    const { container } = render(<FavoriteButton {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('should render add favorite button text', () => {
    const favoriteProviderProps = {
      ...FavoriteContextDefaultValues,
      isFavorite: () => false
    }

    render(<FavoriteButton {...props} />, { favoriteProviderProps })

    expect(
      screen.getByRole('button', { name: /add favorite/i })
    ).toBeInTheDocument()
  })

  it('should render remove favorite button text', () => {
    const favoriteProviderProps = {
      ...FavoriteContextDefaultValues,
      isFavorite: () => true
    }

    render(<FavoriteButton {...props} />, { favoriteProviderProps })

    expect(
      screen.getByRole('button', { name: /remove favorite/i })
    ).toBeInTheDocument()
  })

  it('should add favorite on button click', () => {
    const favoriteProviderProps = {
      ...FavoriteContextDefaultValues,
      isFavorite: () => false,
      handleAddFavorite
    }

    render(<FavoriteButton {...props} />, { favoriteProviderProps })

    userEvent.click(screen.getByRole('button', { name: /add favorite/i }))

    expect(handleAddFavorite).toHaveBeenCalledTimes(1)
  })

  it('should remove favorite on button click', () => {
    const favoriteProviderProps = {
      ...FavoriteContextDefaultValues,
      isFavorite: () => true,
      handleRemoveFavorite
    }

    render(<FavoriteButton {...props} />, { favoriteProviderProps })

    userEvent.click(screen.getByRole('button', { name: /remove favorite/i }))

    expect(handleRemoveFavorite).toHaveBeenCalledTimes(1)
  })
})
