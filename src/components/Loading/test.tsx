import { render, screen } from 'utils/testUtils'

import Loading from '.'

describe('<Loading />', () => {
  it('should render the loading', () => {
    const { container } = render(<Loading />)

    expect(container.firstChild).toMatchInlineSnapshot
  })

  it('should render the loading in full page', () => {
    render(<Loading isFullPage />)

    expect(screen.getByRole('svg', { name: /loading/i })).toHaveStyle({
      position: 'fixed'
    })
  })
})
