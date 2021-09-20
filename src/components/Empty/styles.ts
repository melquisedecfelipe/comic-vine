import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.xlarge} 0;

    > h1 {
      margin-bottom: ${theme.spacings.large};
    }

    > p {
      font-size: ${theme.font.sizes.medium};
      max-width: 300px;
    }
  `}
`
