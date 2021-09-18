import media from 'styled-media-query'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    background: ${theme.colors.white};
    border-bottom: 1px solid ${theme.colors.greyLight};
    padding: ${theme.spacings.medium} 0;
    transition: ${theme.transition.default};
    cursor: pointer;

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
  `}
`

export const Aside = styled.aside`
  height: 100%;
  width: 175px;
`

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    ${media.greaterThan('medium')`
      margin-top: 0;
      margin-left: 16px;
    `}

    & small {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.grey};
      margin-bottom: 4px;
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
      margin: ${theme.spacings.small} 0;
    }

    & p {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.grey};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      margin: ${theme.spacings.xxsmall} 0;
    }
  `}
`
