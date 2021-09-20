import media from 'styled-media-query'

import styled from 'styled-components'

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;

  ${media.greaterThan('medium')`
    flex-direction: row;
  `}

  > div {
    width: 100%;
    max-width: 500px;
  }

  > button {
    height: 100%;
  }
`
