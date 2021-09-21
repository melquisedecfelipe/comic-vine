import { render, screen } from 'utils/testUtils'

import Paginate, { PaginateProps } from '.'

const handlePage = jest.fn()

const props = {
  handlePage,
  page: 1,
  totalPages: 1
} as PaginateProps

describe('<Paginate />', () => {
  it('should render the paginate', () => {
    const { container } = render(<Paginate {...props} />)

    expect(container).toBeInTheDocument()
  })

  it('should render the paginate with buttons disabled', () => {
    const { container } = render(<Paginate {...props} />)

    expect(screen.getByRole('button', { name: /next/i })).toBeDisabled()
    expect(screen.getByRole('button', { name: /previous/i })).toBeDisabled()

    expect(container).toBeInTheDocument()
  })

  it('should render the paginate with button previous disabled', () => {
    const { container } = render(<Paginate {...props} totalPages={2} />)

    expect(screen.getByRole('button', { name: /next/i })).not.toBeDisabled()
    expect(screen.getByRole('button', { name: /previous/i })).toBeDisabled()

    expect(container).toBeInTheDocument()
  })
})
