import { useRouter } from 'next/router'

import React, { useCallback, useEffect, useReducer } from 'react'
import { useQuery } from 'react-query'

import Button from 'components/Button'
import Card from 'components/Card'
import Empty from 'components/Empty'
import { Grid } from 'components/Grid'
import Loading from 'components/Loading'

import { getCharacters } from 'services/api'

import * as S from './styles'

import { QUERY_CHARACTERS } from 'config/constants'

import { Character } from 'types/characters'

import Base from '../Base'

type Type = 'NEXT' | 'PREVIOUS' | 'UPDATE'

type Action = {
  payload: number
  type: Type
}

const initialPageState = { page: 1 }

const reducerPage = (state: typeof initialPageState, action: Action) => {
  switch (action.type) {
    case 'NEXT':
      return { page: state.page + 1 }
    case 'PREVIOUS':
      return { page: state.page - 1 }
    case 'UPDATE':
      return { page: action.payload }
    default:
      return state
  }
}

export default function Home() {
  const { push, query } = useRouter()

  const [pageState, pageDispatch] = useReducer(reducerPage, initialPageState)

  const { data, isFetching, isLoading } = useQuery(
    [QUERY_CHARACTERS, pageState.page],
    () => getCharacters(pageState.page - 1),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true
    }
  )

  const handlePage = useCallback(
    (type: Type) => {
      const page = Number(query.page) || initialPageState.page

      if (type === 'NEXT') {
        push({
          pathname: '/',
          query: { page: page + 1 }
        })
      } else if (type === 'PREVIOUS') {
        push({
          pathname: '/',
          query: { page: page - 1 }
        })
      }
    },
    [push, query.page]
  )

  useEffect(() => {
    if (query.page) {
      const page = Number(query.page)

      pageDispatch({ type: 'UPDATE', payload: page })
    }
  }, [query.page])

  return (
    <Base>
      <S.Wrapper>
        {isLoading ? (
          <S.Loader>
            <Loading />
          </S.Loader>
        ) : (
          <>
            {isFetching && <Loading isFullPage />}

            {data?.results.length === 0 && <Empty />}

            {data?.totalPages !== 0 && (
              <S.Info>
                Page: <strong>{pageState.page || 1}</strong> | Total pages:{' '}
                <strong>{data?.totalPages}</strong> | Items per page: 20 | Total
                items: {data?.total}
              </S.Info>
            )}

            <Grid>
              {data?.results.map((character: Character) => (
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

            {data?.totalPages !== 0 && (
              <S.Footer>
                <Button
                  variant="outlined"
                  onClick={() => handlePage('PREVIOUS')}
                  type="button"
                  disabled={pageState.page === 1}
                >
                  Previous
                </Button>

                <Button
                  variant="filled"
                  onClick={() => handlePage('NEXT')}
                  type="button"
                  disabled={pageState.page === data?.totalPages}
                >
                  Next
                </Button>
              </S.Footer>
            )}
          </>
        )}
      </S.Wrapper>
    </Base>
  )
}
