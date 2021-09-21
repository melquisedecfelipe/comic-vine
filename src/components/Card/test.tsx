import userEvent from '@testing-library/user-event'

import { render, screen } from 'utils/testUtils'

import Card, { CardProps } from '.'
import mock from './mock'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const isFavorite = () => false
const handleAddFavorite = jest.fn()
const handleRemoveFavorite = jest.fn()
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push
}))

const props = {
  character: mock.character,
  isFavorite,
  handleAddFavorite,
  handleRemoveFavorite
} as CardProps

describe('<Card />', () => {
  it('should render the card', () => {
    const { container } = render(<Card {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('should render the card vertical', () => {
    render(<Card {...props} isVertical />)

    expect(
      screen.getByRole('link', { name: /character/i }).parentElement
    ).toHaveStyle({
      'grid-template-columns': '1fr',
      border: 0
    })
  })

  it('should redirect on card click', () => {
    render(<Card {...props} />)

    userEvent.click(screen.getByRole('link', { name: /character/i }))

    expect(push).toHaveBeenCalledTimes(1)
  })

  it('should favorite character on button click', () => {
    render(<Card {...props} />)

    userEvent.click(screen.getByRole('button', { name: /add favorite/i }))

    expect(handleAddFavorite).toHaveBeenCalledTimes(1)
  })

  it('should remove favorite character on button click', () => {
    render(<Card {...props} isFavorite={() => true} />)

    userEvent.click(screen.getByRole('button', { name: /remove favorite/i }))

    expect(handleRemoveFavorite).toHaveBeenCalledTimes(1)
  })
})
