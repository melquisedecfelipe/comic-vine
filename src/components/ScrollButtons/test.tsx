import userEvent from '@testing-library/user-event'

import { render, screen } from 'utils/testUtils'

import ScrollButtons from '.'

const handleDown = jest.fn()
const handleUp = jest.fn()

const props = {
  handleDown,
  handleUp
}

describe('<ScrollButtons />', () => {
  it('should render the scroll buttons', () => {
    const { container } = render(<ScrollButtons {...props} />)

    expect(container.firstChild).toMatchSnapshot
  })

  it('should click on down button', () => {
    render(<ScrollButtons {...props} />)

    userEvent.click(screen.getByRole('button', { name: /down/i }))

    expect(handleDown).toHaveBeenCalledTimes(1)
  })

  it('should click on top button', () => {
    render(<ScrollButtons {...props} />)

    userEvent.click(screen.getByRole('button', { name: /up/i }))

    expect(handleUp).toHaveBeenCalledTimes(1)
  })
})
