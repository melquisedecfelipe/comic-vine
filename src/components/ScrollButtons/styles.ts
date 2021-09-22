import media from 'styled-media-query'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column-reverse;
    gap: ${theme.spacings.medium};
    padding: ${theme.spacings.large};

    ${media.greaterThan('medium')`
      flex-direction: row;
    `}
  `}
`
