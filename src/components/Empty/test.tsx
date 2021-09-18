import { render } from 'utils/testUtils'

import Empty from '.'

describe('<Empty />', () => {
  it('should render the empty', () => {
    const { container } = render(<Empty />)

    expect(container.firstChild).toMatchInlineSnapshot
  })
})
