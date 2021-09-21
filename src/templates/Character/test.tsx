import userEvent from '@testing-library/user-event'

import { render, screen } from 'utils/testUtils'

import mockCharacterDetail from 'mock/characterDetail'

import Character, { CharacterProps } from '.'

const handleBack = jest.fn()

const props = {
  character: mockCharacterDetail,
  handleBack,
  slug: '1443-spider-man'
} as CharacterProps

describe('<Character />', () => {
  it('should render the home', () => {
    const { container } = render(<Character {...props} />)

    expect(container).toBeInTheDocument()
  })

  it('should back page in button click', () => {
    render(<Character {...props} />)

    userEvent.click(screen.getByRole('button', { name: /go back/i }))

    expect(handleBack).toHaveBeenCalledTimes(1)
  })
})
