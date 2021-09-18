import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    gap: ${theme.spacings.medium};
    padding: ${theme.spacings.large};
  `}
`
