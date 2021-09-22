import { render } from 'utils/testUtils'

import mock from './mock'

import TextContent, { TextContentProps } from '.'

const props = {
  content: mock
} as TextContentProps

describe('<TextContent />', () => {
  it('should render the text content', () => {
    const { container } = render(<TextContent {...props} />)

    expect(container).toBeInTheDocument()
  })
})
