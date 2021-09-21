import { useRouter } from 'next/router'

import React, { useCallback, useMemo, useState } from 'react'

import Card from 'components/Card'
import { OptionProps } from 'components/CharacterAutocomplete'
import mockCharacterAutocomplete from 'components/CharacterAutocomplete/mock'
import Empty from 'components/Empty'
import { Grid, GridVertical } from 'components/Grid'
import Loading from 'components/Loading'
import Paginate from 'components/Paginate'
import SearchForm from 'components/SearchForm'

import { useCharacter } from 'hooks/useCharacter'
import { useFavorite } from 'hooks/useFavorite'

import * as S from './styles'

import { Character } from 'types/characters'

import Base from '../Base'

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
  } = useCharacter()

  const { favorites } = useFavorite()

  const { push } = useRouter()

  const [filterName, setFilterName] = useState(filter.name)

  const handleClear = useCallback(() => {
    setName('')

    push({
      pathname: '/',
      query: { page: 1 }
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

          <SearchForm
            handleChange={value => setFilterName(value)}
            handleClear={handleClear}
            handleSubmit={event => handleSubmit(event, filterName)}
            optionsCharacterAutocomplete={optionsCharacterAutocomplete}
          />

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

          {favorites.length > 0 && filter.name === '' && (
            <S.FavoritesWrapper>
              <h3>Favorites</h3>

              <GridVertical>
                {favorites.map((character: Character) => (
                  <Card key={character.id} character={character} isVertical />
                ))}
              </GridVertical>
            </S.FavoritesWrapper>
          )}

          {data && data.length > 0 && (
            <>
              <Grid>
                {data.map((character: Character) => (
                  <Card key={character.id} character={character} />
                ))}
              </Grid>

              {totalPages && totalPages > 1 && (
                <Paginate
                  handlePage={handlePage}
                  page={filter.page}
                  totalPages={totalPages}
                />
              )}
            </>
          )}
        </S.Wrapper>
      )}
    </Base>
  )
}
