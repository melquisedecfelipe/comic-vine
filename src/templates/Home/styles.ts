import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Loader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacings.xlarge} 0;
  `}
`

export const Info = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.grey};
    margin-top: ${theme.spacings.medium};

    > strong {
      color: ${theme.colors.black};
    }
  `}
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.large};
  `}
`