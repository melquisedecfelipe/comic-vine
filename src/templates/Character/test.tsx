import { render } from 'utils/testUtils'

import Character from '.'
import mock from './mock'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const push = jest.fn()

useRouter.mockImplementation(() => ({
  push
}))

describe('<Character />', () => {
  it('should render the home', () => {
    const { container } = render(<Character {...mock} />)

    expect(container.firstChild).toMatchSnapshot
  })
})
