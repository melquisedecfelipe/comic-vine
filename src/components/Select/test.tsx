import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search'

import { fireEvent, render, screen } from 'utils/testUtils'

import mockGender from 'mock/gender'

import Select from '.'

describe('<Select />', () => {
  it('should render the select', () => {
    const { container } = render(
      <Select icon={SearchIcon} options={mockGender} />
    )

    expect(container).toBeInTheDocument()
  })

  it('should render the select styles as not focus', () => {
    render(<Select options={mockGender} />)

    const select = screen.getByRole('select')

    expect(select.parentElement).toHaveStyle({
      border: '1px solid #707372'
    })
  })

  it('should render the select styles as focus', () => {
    render(<Select options={mockGender} />)

    const select = screen.getByRole('select')

    fireEvent.focus(select)

    expect(select.parentElement).toHaveStyle({
      border: '1px solid #000000'
    })
  })

  it('should render the select styles as blur', () => {
    render(<Select options={mockGender} />)

    const select = screen.getByRole('select')

    fireEvent.blur(select)

    expect(select.parentElement).toHaveStyle({
      border: '1px solid #707372'
    })
  })

  it('should handle change select value', () => {
    render(<Select options={mockGender} />)

    const select = screen.getByRole('select') as HTMLSelectElement

    fireEvent.change(select, { target: { value: 'Male' } })

    expect(select.value).toBe('Male')
  })
})
