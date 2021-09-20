import { useRouter } from 'next/router'

import React, { useCallback, useMemo, useState } from 'react'

import Button from 'components/Button'
import Card from 'components/Card'
import { OptionProps } from 'components/CharacterAutocomplete'
import mockCharacterAutocomplete from 'components/CharacterAutocomplete/mock'
import Empty from 'components/Empty'
import { Grid } from 'components/Grid'
import Loading from 'components/Loading'
import SearchForm from 'components/SearchForm'

import { useCharacters } from 'hooks/useCharacters'

import * as S from './styles'

import { Character } from 'types/characters'

import Base from '../Base'

type OptionValueProps = string | OptionProps | null

export default function Home() {
  const {
    data,
    filter,
    handlePage,
    handleSubmit,
    isFetching,
    isLoading,
    setName,
    totalItems,
    totalPages
  } = useCharacters()

  const { push } = useRouter()

  const [filterName, setFilterName] = useState(filter.name)

  const handleChange = useCallback((value: OptionValueProps) => {
    if (value && typeof value === 'object') {
      return setFilterName(value?.title)
    }

    setFilterName(value || '')
  }, [])

  const handleClear = useCallback(() => {
    setFilterName('')
    setName('')

    push({
      pathname: '/',
      query: { name: '', page: 1 }
    })
  }, [setName, push])

  const optionsCharacterAutocomplete = useMemo<OptionProps[]>(() => {
    if (data && data?.length !== 0) {
      return data.map(character => ({
        icon: character.images.icon,
        title: character.name
      }))
    }

    return mockCharacterAutocomplete.options
  }, [data])

  return (
    <Base>
      {isLoading ? (
        <S.LoadingWrapper>
          <Loading />
        </S.LoadingWrapper>
      ) : (
        <S.Wrapper>
          {isFetching && <Loading isFullPage />}

          <S.SearchFormWrapper>
            <SearchForm
              handleChange={handleChange}
              handleClear={handleClear}
              handleSubmit={event => handleSubmit(event, filterName)}
              initialValue={filterName}
              optionsCharacterAutocomplete={optionsCharacterAutocomplete}
            />
          </S.SearchFormWrapper>

          <S.Text>
            Page: <strong>{filter.page || 1}</strong> | Total pages:{' '}
            <strong>{totalPages || 0}</strong> | Items per page: {filter.limit}{' '}
            | Total items: {totalItems || 0}
          </S.Text>

          {filter.name && (
            <S.Text>
              Search character by: <strong>{filter.name}</strong>
            </S.Text>
          )}

          {data === undefined || (data.length === 0 && <Empty />)}

          {data && data.length > 0 && (
            <>
              <Grid>
                {data.map((character: Character) => (
                  <Card
                    key={character.id}
                    aliases={character.aliases}
                    birth={character.birth}
                    deck={character.deck}
                    href={character.slug}
                    image={character.images.small}
                    name={character.name}
                  />
                ))}
              </Grid>

              {totalPages && totalPages > 1 && (
                <S.ButtonWrapper>
                  <Button
                    disabled={filter.page === 1}
                    onClick={() => handlePage('PREVIOUS')}
                    variant="outlined"
                    type="button"
                  >
                    Previous
                  </Button>

                  <Button
                    disabled={filter.page === totalPages}
                    onClick={() => handlePage('NEXT')}
                    type="button"
                    variant="filled"
                  >
                    Next
                  </Button>
                </S.ButtonWrapper>
              )}
            </>
          )}
        </S.Wrapper>
      )}
    </Base>
  )
}
