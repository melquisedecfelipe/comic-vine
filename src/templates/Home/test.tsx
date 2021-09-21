import { render } from 'utils/testUtils'

import Home from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const push = jest.fn()

useRouter.mockImplementation(() => ({
  push
}))

describe('<Home />', () => {
  it('should render the home', () => {
    const { container } = render(<Home />)

    expect(container).toBeInTheDocument()
  })
})
