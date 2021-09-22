import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
    padding: ${theme.spacings.large};
  `}
`
