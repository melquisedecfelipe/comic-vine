import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

type GroupProps = {
  focused: boolean
}

export const Group = styled.div<GroupProps>`
  ${({ theme, focused }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.medium};
    padding: 0 ${theme.spacings.medium};
    border: 1px solid ${focused ? theme.colors.black : theme.colors.grey};
    height: 40px;

    > label {
      margin-right: ${theme.spacings.medium};

      > svg {
        width: 20px;
        height: 20px;
        color: ${focused ? theme.colors.black : theme.colors.grey};
      }
    }

    > input {
      border: none;
      flex: 1;
      margin: 0 ${theme.spacings.xxsmall};
      font-family: ${theme.font.familyBarlow};
      font-size: ${theme.font.sizes.medium};
      color: ${focused ? theme.colors.black : theme.colors.grey};
      height: max-content;

      &:focus {
        outline: none;
      }
    }
  `}
`

export const CharactersList = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    max-width: 500px;
    max-height: 300px;
    z-index: ${theme.layers.alwaysOnTop};
    background: ${theme.colors.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    list-style: none;
    overflow-y: auto;

    & li[data-focus='true'] {
      background: ${theme.colors.greyLight};
      cursor: pointer;
    }

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

export const CharacterItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.medium};
    padding: ${theme.spacings.xsmall};
    transition: ${theme.transition.fast};

    > p {
      font-family: ${theme.font.familyBarlow};
      font-weight: ${theme.font.semiBold};
      font-size: ${theme.font.sizes.small};
    }
  `}
`
