import { render } from 'utils/testUtils'

import CharacterAutocomplete from '.'

describe('<CharacterAutocomplete />', () => {
  it('should render the character autocomplete', () => {
    const { container } = render(<CharacterAutocomplete />)

    expect(container).toBeInTheDocument()
  })
})
