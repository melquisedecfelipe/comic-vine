import userEvent from '@testing-library/user-event'

import { render, screen } from 'utils/testUtils'

import Card from '.'
import mock from './mock'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const push = jest.fn()

useRouter.mockImplementation(() => ({
  push
}))

describe('<Card />', () => {
  it('should render the card', () => {
    const { container } = render(<Card {...mock} />)

    expect(container).toMatchSnapshot()
  })

  it('should render the card vertical', () => {
    render(<Card {...mock} isVertical />)

    expect(
      screen.getByRole('link', { name: /character/i }).parentElement
    ).toHaveStyle({
      'grid-template-columns': '1fr',
      border: 0
    })
  })

  it('should redirect on card click', () => {
    render(<Card {...mock} />)

    userEvent.click(screen.getByRole('link', { name: /character/i }))

    expect(push).toHaveBeenCalledTimes(1)
  })
})
