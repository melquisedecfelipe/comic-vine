import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.small};
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    overflow: hidden;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${theme.font.familyBarlow};
      font-weight: ${theme.font.semiBold};
      margin-top: ${theme.spacings.large};
      margin-bottom: ${theme.spacings.xxsmall};
    }

    p {
      margin-bottom: ${theme.spacings.xsmall};
    }

    img {
      max-width: min(400px, 100%);
      margin-bottom: ${theme.spacings.xsmall};
    }

    ul,
    ol {
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    }
  `}
`
