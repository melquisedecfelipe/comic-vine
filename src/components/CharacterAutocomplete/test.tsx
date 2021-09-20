import { render } from 'utils/testUtils'

import CharacterAutocomplete from '.'
import mock from './mock'

describe('<CharacterAutocomplete />', () => {
  it('should render the character autocomplete', () => {
    const { container } = render(<CharacterAutocomplete {...mock} />)

    expect(container).toBeInTheDocument()
  })
})
