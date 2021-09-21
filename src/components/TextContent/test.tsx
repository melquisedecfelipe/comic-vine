import { render } from 'utils/testUtils'

import mock from './mock'

import TextContent from '.'

describe('<TextContent />', () => {
  it('should render the text content', () => {
    const { container } = render(<TextContent {...mock} />)

    expect(container).toBeInTheDocument()
  })
})
