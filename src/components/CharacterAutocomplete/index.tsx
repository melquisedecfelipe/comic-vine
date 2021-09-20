import Image from 'next/image'

import useAutocomplete from '@material-ui/lab/useAutocomplete'
import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search'

import * as S from './styles'

export type OptionProps = {
  icon: string
  title: string
}

export type CharacterAutocompleteProps = {
  handleChange?: (value: string | OptionProps | null) => void
  initialValue?: string
  options: OptionProps[]
}

const CharacterAutocomplete = ({
  handleChange,
  initialValue,
  options
}: CharacterAutocompleteProps) => {
  const {
    focused,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    getRootProps,
    groupedOptions
  } = useAutocomplete({
    freeSolo: true,
    getOptionLabel: option => option.title,
    inputValue: initialValue,
    onInputChange: (event, value) => !!handleChange && handleChange(value),
    onChange: (event, value) => !!handleChange && handleChange(value),
    options,
    openOnFocus: true
  })

  return (
    <S.Wrapper>
      <S.Group focused={focused} {...getRootProps()}>
        <label {...getInputLabelProps()}>
          <SearchIcon />
        </label>

        <input
          placeholder="Search character by name"
          {...getInputProps()}
          value={initialValue}
        />
      </S.Group>

      {groupedOptions.length > 0 && (
        <S.CharactersList {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <S.CharacterItem
              key={option.title}
              aria-label={option.title}
              {...getOptionProps({ option, index })}
            >
              <Image
                alt={option.title}
                src={option.icon}
                width={50}
                height={50}
              />

              <p>{option.title}</p>
            </S.CharacterItem>
          ))}
        </S.CharactersList>
      )}
    </S.Wrapper>
  )
}

export default CharacterAutocomplete
