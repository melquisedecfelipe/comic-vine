import media from 'styled-media-query'

import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  $isVertical: boolean
}

const wrapperModifiers = {
  isVertical: (theme: DefaultTheme) => css`
    grid-template-columns: 1fr;
    border: 0;
    padding: 0;
    padding-top: ${theme.spacings.medium};

    > section {
      position: absolute;
      bottom: 0;
      left: 0;
      background: ${theme.colors.black};
      margin: 0;

      & h3 {
        color: ${theme.colors.white};
        margin: ${theme.spacings.xsmall};
        -webkit-line-clamp: 1 !important;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, $isVertical }) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    background: ${theme.colors.white};
    border-bottom: 1px solid ${theme.colors.greyLight};
    padding: ${theme.spacings.medium} 0;
    transition: ${theme.transition.default};

    & img {
      transition: ${theme.transition.default};
    }

    &:hover {
      & img {
        filter: grayscale(1);
      }
    }

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 175px 1fr;
    `}

    ${$isVertical && wrapperModifiers.isVertical(theme)}
  `}
`

export const ImageWrapper = styled.aside`
  position: relative;
  height: 100%;
  width: 175px;

  > button {
    position: absolute;
    top: 0;
    right: 0;

    > svg {
      width: 20px;
      height: 20px;
    }
  }
`

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    cursor: pointer;

    ${media.greaterThan('medium')`
      margin-left: ${theme.spacings.medium};
    `}

    & small {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.grey};
      margin: ${theme.spacings.xxsmall} 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    & h3 {
      font-family: ${theme.font.familyBarlow};
      font-weight: ${theme.font.semiBold};
      font-size: ${theme.font.sizes.large};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    & p {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.grey};
      margin: ${theme.spacings.small} 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
    }
  `}
`
