import { render } from 'utils/testUtils'

import Base from '.'

describe('<Base />', () => {
  it('should render the base', () => {
    const { container } = render(<Base>Base component</Base>)

    expect(container).toBeInTheDocument()
  })
})
