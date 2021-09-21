import { render, screen } from 'utils/testUtils'

import Loading from '.'

describe('<Loading />', () => {
  it('should render the loading', () => {
    const { container } = render(<Loading />)

    expect(container.firstChild).toMatchInlineSnapshot(`
.c1 {
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
}

.c0 > svg {
  -webkit-animation: rotate 4s infinite;
  animation: rotate 4s infinite;
  width: 40px;
}

<div
  aria-label="Loading"
  class="c0"
  role="svg"
>
  <svg
    aria-hidden="true"
    class="c1"
    fill="currentColor"
    focusable="false"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
    />
  </svg>
</div>
`)
  })

  it('should render the loading in full page', () => {
    render(<Loading isFullPage />)

    expect(screen.getByRole('svg', { name: /loading/i })).toHaveStyle({
      position: 'fixed'
    })
  })
})
