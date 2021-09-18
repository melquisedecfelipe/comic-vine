import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  as?: React.ElementType
  variant?: 'filled' | 'outlined'
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  { children, variant = 'filled', ...props },
  ref
) => (
  <S.Wrapper variant={variant} ref={ref} {...props}>
    {children}
  </S.Wrapper>
)

export default forwardRef(Button)
