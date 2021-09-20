import { render, screen } from 'utils/testUtils'

import Button from '.'

describe('<Button />', () => {
  it('should render the filled style by default', () => {
    const { container } = render(<Button>Button component</Button>)

    expect(
      screen.getByRole('button', { name: /button component/i })
    ).toHaveStyle({
      padding: '0px 16px',
      'font-size': '16px',
      color: '#FFFFFF',
      background: '#000000'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the outlined style', () => {
    render(<Button variant="outlined">Button component</Button>)

    expect(
      screen.getByRole('button', { name: /button component/i })
    ).toHaveStyle({
      color: '#000000',
      background: '#FFFFFF',
      border: '1px solid #000000'
    })
  })

  it('should render a disabled Button', () => {
    render(<Button disabled>Button component</Button>)

    expect(
      screen.getByRole('button', { name: /button component/i })
    ).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled'
    })
  })

  it('should render Button as a link', () => {
    render(
      <Button as="a" href="/link">
        Button as link
      </Button>
    )

    expect(
      screen.getByRole('link', { name: /button as link/i })
    ).toHaveAttribute('href', '/link')
  })
})
