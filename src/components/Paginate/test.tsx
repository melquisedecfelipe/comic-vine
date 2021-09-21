import userEvent from '@testing-library/user-event'

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
    render(<Paginate {...props} />)

    expect(screen.getByRole('button', { name: /next/i })).toBeDisabled()
    expect(screen.getByRole('button', { name: /previous/i })).toBeDisabled()
  })

  it('should render the paginate with button previous disabled', () => {
    render(<Paginate {...props} totalPages={2} />)

    expect(screen.getByRole('button', { name: /next/i })).not.toBeDisabled()
    expect(screen.getByRole('button', { name: /previous/i })).toBeDisabled()
  })

  it('should handle page in next button click', () => {
    render(<Paginate {...props} totalPages={2} />)

    userEvent.click(screen.getByRole('button', { name: /next/i }))

    expect(handlePage).toHaveBeenCalledWith('NEXT')
  })

  it('should handle page in next button click', () => {
    render(<Paginate {...props} page={2} totalPages={2} />)

    userEvent.click(screen.getByRole('button', { name: /previous/i }))

    expect(handlePage).toHaveBeenCalledWith('PREVIOUS')
  })
})
