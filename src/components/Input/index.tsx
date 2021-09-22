import { useState, InputHTMLAttributes, useCallback, memo } from 'react'

import { StyledIcon } from '@styled-icons/styled-icon'

import * as S from './styles'

export type InputProps = {
  disabled?: boolean
  handleChange?: (value: string) => void
  icon?: StyledIcon
  initialValue?: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({
  disabled = false,
  handleChange,
  icon: Icon,
  initialValue,
  name,
  ...props
}: InputProps) => {
  const [focused, setFocused] = useState(false)

  const [value, setValue] = useState(initialValue)

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.currentTarget.value
      setValue(newValue)

      !!handleChange && handleChange(newValue)
    },
    [handleChange]
  )

  const onBlur = useCallback(() => {
    setFocused(false)
  }, [])

  const onFocus = useCallback(() => {
    setFocused(true)
  }, [])

  return (
    <S.Wrapper disabled={disabled} focused={focused}>
      {!!Icon && (
        <label htmlFor={name}>
          <Icon />
        </label>
      )}

      <input
        disabled={disabled}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        {...props}
      />
    </S.Wrapper>
  )
}

export default memo(Input)
