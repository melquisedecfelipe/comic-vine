import userEvent from '@testing-library/user-event'

import mock from 'components/Card/mock'

import { FavoriteContextDefaultValues } from 'hooks/useFavorite'

import { render, screen } from 'utils/testUtils'

import FavoriteButton from '.'

const handleAddFavorite = jest.fn()
const handleRemoveFavorite = jest.fn()

describe('<FavoriteButton />', () => {
  it('should render the favorite button', () => {
    const { container } = render(<FavoriteButton {...mock} />)

    expect(container).toMatchSnapshot()
  })

  it('should render add favorite button text', () => {
    const favoriteProviderProps = {
      ...FavoriteContextDefaultValues,
      isFavorite: () => false
    }

    render(<FavoriteButton {...mock} />, { favoriteProviderProps })

    expect(
      screen.getByRole('button', { name: /add favorite/i })
    ).toBeInTheDocument()
  })

  it('should render remove favorite button text', () => {
    const favoriteProviderProps = {
      ...FavoriteContextDefaultValues,
      isFavorite: () => true
    }

    render(<FavoriteButton {...mock} />, { favoriteProviderProps })

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

    render(<FavoriteButton {...mock} />, { favoriteProviderProps })

    userEvent.click(screen.getByRole('button', { name: /add favorite/i }))

    expect(handleAddFavorite).toHaveBeenCalledTimes(1)
  })

  it('should remove favorite on button click', () => {
    const favoriteProviderProps = {
      ...FavoriteContextDefaultValues,
      isFavorite: () => true,
      handleRemoveFavorite
    }

    render(<FavoriteButton {...mock} />, { favoriteProviderProps })

    userEvent.click(screen.getByRole('button', { name: /remove favorite/i }))

    expect(handleRemoveFavorite).toHaveBeenCalledTimes(1)
  })
})
