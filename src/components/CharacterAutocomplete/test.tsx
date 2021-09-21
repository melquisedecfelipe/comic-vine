import { fireEvent, render, screen } from 'utils/testUtils'

import mockOptions from 'mock/options'

import CharacterAutocomplete, { CharacterAutocompleteProps } from '.'

const props = {
  options: mockOptions
} as CharacterAutocompleteProps

describe('<CharacterAutocomplete />', () => {
  it('should render the character autocomplete', () => {
    const { container } = render(<CharacterAutocomplete {...props} />)

    expect(container).toBeInTheDocument()
  })

  it('should render the autocomplete styles as not focus', () => {
    render(<CharacterAutocomplete {...props} />)

    const input = screen.getByPlaceholderText('Search character by name')

    expect(input.parentElement).toHaveStyle({
      border: '1px solid #707372'
    })
  })

  it('should render the autocomplete styles as focus', () => {
    render(<CharacterAutocomplete {...props} />)

    const input = screen.getByPlaceholderText('Search character by name')

    fireEvent.focus(input)

    expect(input.parentElement).toHaveStyle({
      border: '1px solid #000000'
    })
  })

  it('should render the autocomplete list on as focus', () => {
    render(<CharacterAutocomplete {...props} />)

    const input = screen.getByPlaceholderText('Search character by name')

    fireEvent.focus(input)

    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('should render valu in autocomplete on click option', async () => {
    render(<CharacterAutocomplete {...props} />)

    const input = screen.getByPlaceholderText('Search character by name')

    fireEvent.focus(input)

    const option = screen.getByRole('option', { name: /iron man/i })

    fireEvent.click(option)

    expect(screen.queryByRole('listbox')).toBeNull()
  })
})
