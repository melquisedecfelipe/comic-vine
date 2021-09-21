import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: ${theme.spacings.medium};
    margin: ${theme.spacings.xlarge} 0;
  `}
`

export const GridVertical = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.medium};
    overflow-x: auto;

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    &::-webkit-scrollbar-track {
      background: ${theme.colors.white};
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.black};
    }
  `}
`
