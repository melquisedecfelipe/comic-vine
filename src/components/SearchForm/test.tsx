import userEvent from '@testing-library/user-event'

import { render, screen } from 'utils/testUtils'

import mockOptions from 'mock/options'

import SearchForm, { SearchFormProps } from '.'

const handleChange = jest.fn()
const handleClear = jest.fn()
const handleSubmit = jest.fn()

const props = {
  handleChange,
  handleClear,
  handleSubmit,
  optionsCharacterAutocomplete: mockOptions
} as SearchFormProps

describe('<SearchForm />', () => {
  it('should render the search form', () => {
    const { container } = render(<SearchForm {...props} />)

    expect(container).toBeInTheDocument()
  })

  it('should submit form on button click', () => {
    render(<SearchForm {...props} />)

    userEvent.click(screen.getByRole('button', { name: /search/i }))

    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })

  it('should clear form on button click', () => {
    render(<SearchForm {...props} />)

    userEvent.click(screen.getByRole('button', { name: /clear/i }))

    expect(handleClear).toHaveBeenCalledTimes(1)
  })
})
