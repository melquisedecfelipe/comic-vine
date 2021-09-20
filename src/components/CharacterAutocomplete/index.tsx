import Image from 'next/image'

import useAutocomplete from '@material-ui/lab/useAutocomplete'
import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search'

import * as S from './styles'

export type OptionProps = {
  icon: string
  title: string
}

export type CharacterAutocompleteProps = {
  onInputChange?: (value: string | OptionProps | null) => void
  initialValue?: string
  options: OptionProps[]
}

const CharacterAutocomplete = ({
  onInputChange,
  options
}: CharacterAutocompleteProps) => {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    focused
  } = useAutocomplete({
    options,
    freeSolo: true,
    openOnFocus: true,
    getOptionLabel: option => option.title,
    onChange: (event, value) => !!onInputChange && onInputChange(value),
    onInputChange: (event, value) => !!onInputChange && onInputChange(value)
  })

  return (
    <S.Wrapper>
      <S.Group focused={focused} {...getRootProps()}>
        <label {...getInputLabelProps()}>
          <SearchIcon />
        </label>

        <input placeholder="Search character by name" {...getInputProps()} />
      </S.Group>

      {groupedOptions.length > 0 && (
        <S.CharactersList {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <S.CharacterItem
              key={option.title}
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
