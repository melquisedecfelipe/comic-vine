import { act } from 'react-dom/test-utils'

import userEvent from '@testing-library/user-event'

import { fireEvent, render, screen } from 'utils/testUtils'

import mock from './mock'

import CharacterForm, { CharacterFormProps } from '.'

const handleSubmit = jest.fn()
const setCharacterEdit = jest.fn()

const props = {
  characterEdit: mock,
  handleSubmit,
  setCharacterEdit
} as CharacterFormProps

describe('<CharacterForm />', () => {
  it('should render the heading', () => {
    const { container } = render(<CharacterForm {...props} />)

    expect(container).toBeInTheDocument()
  })

  it('should submit on button click', () => {
    render(<CharacterForm {...props} />)

    userEvent.click(screen.getByLabelText(/toogle dropdown/i))

    act(() => {
      userEvent.click(screen.getByRole('button', { name: /save/i }))
    })

    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })

  it('should handle change state on input change', () => {
    render(<CharacterForm {...props} />)

    userEvent.click(screen.getByLabelText(/toogle dropdown/i))

    const inputAliases = screen.getByPlaceholderText(
      'Aliases'
    ) as HTMLInputElement

    const inputBirth = screen.getByPlaceholderText('Birth') as HTMLInputElement

    const inputName = screen.getByPlaceholderText('Name') as HTMLInputElement

    const inputRealName = screen.getByPlaceholderText(
      'Real name'
    ) as HTMLInputElement

    const selectGender = screen.getByRole('select') as HTMLSelectElement

    fireEvent.change(inputAliases, { target: { value: 'Aliases' } })
    fireEvent.change(inputBirth, { target: { value: '10-20-1997' } })
    fireEvent.change(inputName, { target: { value: 'Name' } })
    fireEvent.change(inputRealName, { target: { value: 'Real name' } })
    fireEvent.change(selectGender, { target: { value: 'Male' } })

    expect(inputAliases.value).toBe('Aliases')
    expect(inputBirth.type).toBe('date')
    expect(inputName.value).toBe('Name')
    expect(inputRealName.value).toBe('Real name')
    expect(selectGender.value).toBe('Male')
  })
})
