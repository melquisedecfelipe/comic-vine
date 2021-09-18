import { useState, InputHTMLAttributes } from 'react'

import { StyledIcon } from '@styled-icons/styled-icon'

import * as S from './styles'

export type InputProps = {
  onInputChange?: (value: string) => void
  initialValue?: string
  icon?: StyledIcon
  disabled?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({
  icon: Icon,
  name,
  initialValue = '',
  disabled = false,
  onInputChange,
  ...props
}: InputProps) => {
  const [value, setValue] = useState(initialValue)
  const [focused, setFocused] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  const onFocus = () => {
    setFocused(true)
  }

  const onBlur = () => {
    setFocused(false)
  }

  return (
    <S.Wrapper disabled={disabled} focused={focused}>
      {!!Icon && (
        <label htmlFor={name}>
          <Icon />
        </label>
      )}
      <input
        type="text"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        disabled={disabled}
        id={name}
        {...props}
      />
    </S.Wrapper>
  )
}

export default Input
