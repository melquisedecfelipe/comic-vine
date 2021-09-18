import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Header = styled.header`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xlarge};
    border-bottom: 1px solid ${theme.colors.greyLight};

    > h3 {
      font-family: ${theme.font.familyBarlow};
      font-weight: ${theme.font.semiBold};
      font-size: ${theme.font.sizes.huge};
      margin-bottom: ${theme.spacings.small};
    }

    > p {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.grey};
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`

export const Actions = styled.div`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    gap: ${theme.spacings.medium};
    padding: ${theme.spacings.large};
  `}
`
