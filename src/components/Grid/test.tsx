import { render } from 'utils/testUtils'

import { Grid } from '.'

describe('<Grid />', () => {
  it('should render correctly', () => {
    const { container } = render(<Grid>Grid component</Grid>)

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
  grid-gap: 16px;
  margin: 32px 0;
}

<div
  class="c0"
>
  Grid component
</div>
`)
  })
})
