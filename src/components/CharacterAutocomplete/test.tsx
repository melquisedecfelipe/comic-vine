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
})
