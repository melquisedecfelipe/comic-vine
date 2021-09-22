import { Dispatch, memo, SetStateAction, useCallback } from 'react'

import Button from 'components/Button'
import Dropdown from 'components/Dropdown'
import Input from 'components/Input'
import Select from 'components/Select'

import { formatDateToIso } from 'utils/formatDate'

import * as S from './styles'

import { CharacterEdit } from 'types/characters'

import mockGender from 'mock/gender'

export type CharacterFormProps = {
  characterEdit: CharacterEdit
  handleSubmit: () => void
  setCharacterEdit: Dispatch<SetStateAction<CharacterEdit>>
}

const CharacterForm = ({
  characterEdit,
  handleSubmit,
  setCharacterEdit
}: CharacterFormProps) => {
  const handleChange = useCallback(
    (field: string, value: string) => {
      setCharacterEdit(form => ({ ...form, [field]: value }))
    },
    [setCharacterEdit]
  )

  return (
    <Dropdown title="Edit character">
      <S.Wrapper
        onSubmit={event => {
          event.preventDefault()
          handleSubmit()
        }}
      >
        <Input
          handleChange={value => handleChange('aliases', value)}
          initialValue={characterEdit.aliases || ''}
          name="aliases"
          placeholder="Aliases"
        />

        <Input
          handleChange={value => handleChange('birth', value)}
          initialValue={formatDateToIso(characterEdit.birth)}
          name="birth"
          placeholder="Birth"
          type="date"
        />

        <Input
          handleChange={value => handleChange('name', value)}
          initialValue={characterEdit.name}
          name="name"
          placeholder="Name"
        />

        <Input
          handleChange={value => handleChange('realName', value)}
          initialValue={characterEdit.realName}
          name="realName"
          placeholder="Real name"
        />

        <Select
          handleChange={value => handleChange('gender', value)}
          initialValue={characterEdit.gender}
          name="gender"
          options={mockGender}
          placeholder="Gender"
        />

        <Button aria-label="Save" role="button">
          Save
        </Button>
      </S.Wrapper>
    </Dropdown>
  )
}

export default memo(CharacterForm)
