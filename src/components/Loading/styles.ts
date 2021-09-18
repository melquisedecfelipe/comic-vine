import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  $isFullPage?: boolean
}

const wrapperModifiers = {
  fullPage: (theme: DefaultTheme) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.75);
    z-index: ${theme.layers.alwaysOnTop};
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, $isFullPage }) => css`
    ${$isFullPage && wrapperModifiers.fullPage(theme)}

    > svg {
      animation: rotate 4s infinite;
      width: ${theme.font.sizes.huge};
    }

    @keyframes rotate {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  `}
`
