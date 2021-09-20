import { fireEvent, render, screen } from 'utils/testUtils'

import CharacterAutocomplete from '.'
import mock from './mock'

describe('<CharacterAutocomplete />', () => {
  it('should render the character autocomplete', () => {
    const { container } = render(<CharacterAutocomplete {...mock} />)

    expect(container).toBeInTheDocument()
  })

  it('should render the autocomplete styles as not focus', () => {
    render(<CharacterAutocomplete {...mock} />)

    const input = screen.getByPlaceholderText('Search character by name')

    expect(input.parentElement).toHaveStyle({
      border: '1px solid #707372'
    })
  })

  it('should render the autocomplete styles as focus', () => {
    render(<CharacterAutocomplete {...mock} />)

    const input = screen.getByPlaceholderText('Search character by name')

    fireEvent.focus(input)

    expect(input.parentElement).toHaveStyle({
      border: '1px solid #000000'
    })
  })

  it('should render the autocomplete list on as focus', () => {
    render(<CharacterAutocomplete {...mock} />)

    const input = screen.getByPlaceholderText('Search character by name')

    fireEvent.focus(input)

    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('should render valu in autocomplete on click option', async () => {
    render(<CharacterAutocomplete {...mock} />)

    const input = screen.getByPlaceholderText('Search character by name')

    fireEvent.focus(input)

    const option = screen.getByRole('option', { name: /iron man/i })

    fireEvent.click(option)

    expect(screen.queryByRole('listbox')).toBeNull()
  })
})
