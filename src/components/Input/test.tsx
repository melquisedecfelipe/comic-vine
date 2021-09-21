import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search'

import { fireEvent, render, screen } from 'utils/testUtils'

import Input from '.'

describe('<Input />', () => {
  it('should render the input', () => {
    const { container } = render(<Input />)

    expect(container).toBeInTheDocument()
  })

  it('should render the input styles as not focus', () => {
    render(<Input placeholder="Input component" icon={SearchIcon} />)

    const input = screen.getByPlaceholderText('Input component')

    expect(input.parentElement).toHaveStyle({
      border: '1px solid #707372'
    })
  })

  it('should render the input styles as focus', () => {
    render(<Input placeholder="Input component" icon={SearchIcon} />)

    const input = screen.getByPlaceholderText('Input component')

    fireEvent.focus(input)

    expect(input.parentElement).toHaveStyle({
      border: '1px solid #000000'
    })
  })

  it('should render the input styles as blur', () => {
    render(<Input placeholder="Input component" icon={SearchIcon} />)

    const input = screen.getByPlaceholderText('Input component')

    fireEvent.blur(input)

    expect(input.parentElement).toHaveStyle({
      border: '1px solid #707372'
    })
  })

  it('should handle change input value', () => {
    render(<Input placeholder="Input component" icon={SearchIcon} />)

    const input = screen.getByPlaceholderText('Input component')

    fireEvent.change(input, { target: { value: 'Hello' } })

    expect(input.value).toBe('Hello')
  })
})
