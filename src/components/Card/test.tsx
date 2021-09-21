import userEvent from '@testing-library/user-event'

import { render, screen } from 'utils/testUtils'

import mockCharacter from 'mock/character'

import Card, { CardProps } from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const push = jest.fn()

const props = {
  character: mockCharacter
} as CardProps

describe('<Card />', () => {
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      push
    }))
  })

  it('should render the card', () => {
    const { container } = render(<Card {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('should render the card vertical', () => {
    render(<Card character={mockCharacter} isVertical />)

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
})
