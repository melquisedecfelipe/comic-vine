import React, { FormEvent } from 'react'

import Button from 'components/Button'
import CharacterAutocomplete, {
  OptionProps
} from 'components/CharacterAutocomplete'

import * as S from './styles'

export type SearchFormProps = {
  handleChange: (value: string | OptionProps | null) => void
  handleClear: () => void
  handleSubmit: (event: FormEvent) => void
  initialValue: string
  optionsCharacterAutocomplete: OptionProps[]
}

const SearchForm = ({
  handleChange,
  handleClear,
  handleSubmit,
  initialValue,
  optionsCharacterAutocomplete
}: SearchFormProps) => (
  <S.Wrapper onSubmit={handleSubmit}>
    <CharacterAutocomplete
      handleChange={handleChange}
      initialValue={initialValue}
      options={optionsCharacterAutocomplete}
    />

    <Button>Search</Button>

    <Button onClick={handleClear} variant="outlined">
      Clear
    </Button>
  </S.Wrapper>
)

export default SearchForm
