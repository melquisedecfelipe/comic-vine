import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

export type WrapperProps = Pick<ButtonProps, 'variant'>

const wrapperModifiers = {
  filled: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.black};
  `,
  outlined: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};

    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.black};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    &:disabled {
      cursor: not-allowed;
      background: ${theme.colors.disable};
      color: ${theme.colors.grey};
      border: 0;
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, variant, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.font.familyBarlow};
    font-weight: ${theme.font.semiBold};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    cursor: pointer;
    border: none;
    text-decoration: none;
    transition: ${theme.transition.default};
    height: ${theme.font.sizes.huge};

    &:focus {
      opacity: 0.75;
    }

    ${!!variant && wrapperModifiers[variant](theme)};
    ${disabled && wrapperModifiers.disabled(theme)};
  `}
`
