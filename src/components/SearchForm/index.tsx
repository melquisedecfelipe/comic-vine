import { memo } from 'react'

import Button from 'components/Button'
import CharacterAutocomplete, {
  OptionProps
} from 'components/CharacterAutocomplete'

import * as S from './styles'

export type SearchFormProps = {
  handleChange: (value: string) => void
  handleClear: () => void
  handleSubmit: () => void
  optionsCharacterAutocomplete: OptionProps[]
}

const SearchForm = ({
  handleChange,
  handleClear,
  handleSubmit,
  optionsCharacterAutocomplete
}: SearchFormProps) => (
  <S.Wrapper
    onSubmit={event => {
      event.preventDefault()
      handleSubmit()
    }}
  >
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

export default memo(SearchForm)
