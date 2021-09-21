import { render } from 'utils/testUtils'

import Empty from '.'

describe('<Empty />', () => {
  it('should render the empty', () => {
    const { container } = render(<Empty />)

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.c0 > h1 {
  margin-bottom: 24px;
}

.c0 > p {
  font-size: 16px;
  max-width: 300px;
}

<div
  class="c0"
>
  <h1>
    :(
  </h1>
  <p>
    We couldn't find any results for this search, please try again.
  </p>
</div>
`)
  })
})
