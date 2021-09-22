import styled, { css } from 'styled-components'

type WrapperProps = {
  isOpen?: boolean
}

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: max-content;

    ${Content},
    ${Overlay} {
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};

      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`
export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    font-family: ${theme.font.familyBarlow};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.semiBold};
    position: relative;
    display: flex;
    align-items: center;
    z-index: ${theme.layers.alwaysOnTop};

    > svg {
      margin-left: ${theme.spacings.xsmall};
      width: 24px;
      height: 24px;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    margin-top: ${theme.spacings.small};
    position: absolute;
    right: 0;
    z-index: ${theme.layers.alwaysOnTop};
    border-top: 3px solid ${theme.colors.black};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

    &::before {
      content: '';
      position: absolute;
      border-right: 8px solid transparent;
      border-left: 8px solid transparent;
      border-bottom: 8px solid ${theme.colors.black};
      top: -8px;
      right: 4px;
    }
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${theme.layers.overlay};
    cursor: pointer;
  `}
`
