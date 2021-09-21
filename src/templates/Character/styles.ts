import media from 'styled-media-query'

import { Wrapper as TextContentWrapper } from 'components/TextContent/styles'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xlarge};
    margin-top: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    position: relative;
    margin: ${theme.spacings.xlarge} 0;

    > button {
      position: absolute;
      top: 0;
      right: 0;
    }

    > section {
      ${media.greaterThan('medium')`
        position: absolute;
        bottom: 0;
        left: 0;
        padding: ${theme.spacings.small};
        background: ${theme.colors.black};
      `}

      > h3 {
        font-family: ${theme.font.familyBarlow};
        font-weight: ${theme.font.semiBold};
        font-size: ${theme.font.sizes.huge};

        ${media.greaterThan('medium')`
          color: ${theme.colors.white};
        `}
      }
    }
  `}
`

export const Content = styled.section`
  ${({ theme }) => css`
    > div {
      display: flex;
      gap: ${theme.spacings.xxsmall};
      padding-bottom: ${theme.spacings.small};
      border-bottom: 1px solid ${theme.colors.greyLight};

      > small {
        font-size: ${theme.font.sizes.xsmall};
        color: ${theme.colors.grey};
        border: 1px solid ${theme.colors.greyLight};
        padding: ${theme.spacings.xsmall};
      }
    }

    ${TextContentWrapper} {
      flex-direction: column;
      margin-top: ${theme.spacings.small};
    }
  `}
`
