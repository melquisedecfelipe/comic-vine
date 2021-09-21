import { render } from 'utils/testUtils'

import { Grid, GridVertical } from '.'

describe('<Grid />', () => {
  it('should render the grid', () => {
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

describe('<GridVertical />', () => {
  it('should render the grid vertical', () => {
    const { container } = render(<GridVertical>Grid component</GridVertical>)

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 16px;
  overflow-x: auto;
}

.c0::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

.c0::-webkit-scrollbar-track {
  background: #FFFFFF;
}

.c0::-webkit-scrollbar-thumb {
  background: #000000;
}

<div
  class="c0"
>
  Grid component
</div>
`)
  })
})
