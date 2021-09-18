import Image from 'next/image'

import useAutocomplete from '@material-ui/lab/useAutocomplete'
import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search'

import * as S from './styles'

import mock from './mock'

export type OptionsProps = {
  icon: string
  title: string
}

const CharacterAutocomplete = () => {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    focused
  } = useAutocomplete({
    options: mock,
    getOptionLabel: option => option.title
  })

  return (
    <S.Wrapper>
      <S.Group focused={focused} {...getRootProps()}>
        <label {...getInputLabelProps()}>
          <SearchIcon />
        </label>

        <input placeholder="Search character by name" {...getInputProps()} />
      </S.Group>

      {groupedOptions.length > 0 ? (
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
                layout="fill"
              />

              <p>{option.title}</p>
            </S.CharacterItem>
          ))}
        </S.CharactersList>
      ) : null}
    </S.Wrapper>
  )
}

export default CharacterAutocomplete
