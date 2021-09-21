import { Wrapper as EmptyWrapper } from 'components/Empty/styles'
import { GridVertical } from 'components/Grid'
import { Wrapper as SearchFormWrapper } from 'components/SearchForm/styles'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${EmptyWrapper} {
      padding: ${theme.spacings.xlarge} 0;
    }

    ${SearchFormWrapper} {
      margin-top: ${theme.spacings.medium};
    }
  `}
`

export const LoadingWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacings.xlarge} 0;
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.grey};
    margin-top: ${theme.spacings.medium};

    > strong {
      color: ${theme.colors.black};
    }
  `}
`

export const FavoritesWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};

    > h3 {
      font-family: ${theme.font.familyBarlow};
      font-weight: ${theme.font.semiBold};
      font-size: ${theme.font.sizes.large};
    }

    ${GridVertical} {
      margin-top: ${theme.spacings.xxsmall};
      margin-bottom: ${theme.spacings.xlarge};
      padding-bottom: ${theme.spacings.xsmall};
    }
  `}
`

export const ButtonWrapper = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.large};
  `}
`
