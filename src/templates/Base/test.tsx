import userEvent from '@testing-library/user-event'

import { render, screen } from 'utils/testUtils'

import Base from '.'

describe('<Base />', () => {
  it('should render the base', () => {
    const { container } = render(<Base>Base component</Base>)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should scroll to down', () => {
    render(<Base>Base component</Base>)

    userEvent.click(screen.getByRole('button', { name: /down/i }))
  })

  it('should scroll to up', () => {
    render(<Base>Base component</Base>)

    userEvent.click(screen.getByRole('button', { name: /up/i }))
  })
})
