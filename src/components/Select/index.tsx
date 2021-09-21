import { useState, SelectHTMLAttributes, useCallback } from 'react'

import { StyledIcon } from '@styled-icons/styled-icon'

import * as S from './styles'

export type Options = {
  label: string
  value: string | number
}

export type SelectProps = {
  disabled?: boolean
  handleChange?: (value: string) => void
  icon?: StyledIcon
  initialValue?: string
  options: Options[]
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = ({
  disabled = false,
  handleChange,
  icon: Icon,
  initialValue = '',
  name,
  options,
  placeholder,
  ...props
}: SelectProps) => {
  const [focused, setFocused] = useState(false)

  const [value, setValue] = useState(initialValue)

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
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

      <select
        disabled={disabled}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        role="select"
        value={value}
        {...props}
      >
        <option value="">{placeholder}</option>

        {options.map(optionValue => (
          <option key={optionValue.value} value={optionValue.value}>
            {optionValue.label}
          </option>
        ))}
      </select>
    </S.Wrapper>
  )
}

export default Select
