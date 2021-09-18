import { render } from 'utils/testUtils'

import TextContent from '.'
import mock from './mock'

describe('<TextContent />', () => {
  it('should render the text content', () => {
    const { container } = render(<TextContent {...mock} />)

    expect(container).toBeInTheDocument()
  })
})
