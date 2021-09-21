import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.large};
  `}
`
