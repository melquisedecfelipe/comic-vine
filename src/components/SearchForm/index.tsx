import React, { FormEvent } from 'react'

import Button from 'components/Button'
import CharacterAutocomplete, {
  OptionProps
} from 'components/CharacterAutocomplete'

import * as S from './styles'

export type SearchFormProps = {
  handleChange: (value: string) => void
  handleClear: () => void
  handleSubmit: (event: FormEvent) => void
  optionsCharacterAutocomplete: OptionProps[]
}

const SearchForm = ({
  handleChange,
  handleClear,
  handleSubmit,
  optionsCharacterAutocomplete
}: SearchFormProps) => (
  <S.Wrapper onSubmit={handleSubmit}>
    <CharacterAutocomplete
      handleChange={handleChange}
      options={optionsCharacterAutocomplete}
    />

    <Button>Search</Button>

    <Button onClick={handleClear} variant="outlined" type="button">
      Clear
    </Button>
  </S.Wrapper>
)

export default SearchForm
