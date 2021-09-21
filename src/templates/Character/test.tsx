import userEvent from '@testing-library/user-event'

import { render, screen } from 'utils/testUtils'

import Character from '.'
import mock from './mock'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const back = jest.fn()

useRouter.mockImplementation(() => ({
  back
}))

describe('<Character />', () => {
  it('should render the home', () => {
    const { container } = render(<Character {...mock} />)

    expect(container).toBeInTheDocument()
  })

  it('should back page in button click', () => {
    render(<Character {...mock} handleBack={back} />)

    userEvent.click(screen.getByRole('button', { name: /go back/i }))

    expect(back).toHaveBeenCalledTimes(1)
  })
})
