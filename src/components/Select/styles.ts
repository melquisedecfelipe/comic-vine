import styled, { css } from 'styled-components'

import { SelectProps } from './'

type WrapperProps = { focused: boolean } & Pick<SelectProps, 'disabled'>

export const Wrapper = styled.div<WrapperProps>`
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

    > select {
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
