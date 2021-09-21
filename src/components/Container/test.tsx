import { render } from 'utils/testUtils'

import theme from 'styles/theme'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = render(<Container>Container component</Container>)

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  width: 100%;
  max-width: 950px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
}

<div
  class="c0"
>
  Container component
</div>
`)
  })
})
