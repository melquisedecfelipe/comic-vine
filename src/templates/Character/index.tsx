import { NextSeo } from 'next-seo'
import Image from 'next/image'

import { memo, useCallback, useState } from 'react'

import Button from 'components/Button'
import CharacterForm from 'components/CharacterForm'
import FavoriteButton from 'components/FavoriteButton'
import TextContent from 'components/TextContent'

import { formatDate, formatDateToIso } from 'utils/formatDate'
import { getStorageItem, setStorageItem } from 'utils/localStorage'

import * as S from './styles'

import { CharacterDetail, CharacterEdit } from 'types/characters'

import Base from '../Base'

export type CharacterProps = {
  handleBack: () => void
  slug?: string
  character: CharacterDetail
}

const Character = ({ character, handleBack }: CharacterProps) => {
  const [characterEdit, setCharacterEdit] = useState<CharacterEdit>(() => {
    const characterEditStorage = getStorageItem(
      character.id.toString()
    ) as CharacterEdit | null

    if (characterEditStorage) {
      return {
        aliases: characterEditStorage.aliases,
        birth: formatDateToIso(characterEditStorage.birth),
        gender: characterEditStorage.gender,
        id: characterEditStorage.id,
        name: characterEditStorage.name,
        realName: characterEditStorage.realName
      }
    }

    return {
      aliases: character.aliases,
      birth: formatDateToIso(character.birth),
      gender: character.gender,
      id: character.id,
      name: character.name,
      realName: character.realName
    }
  })

  const handleSubmit = useCallback(() => {
    const { birth, id, ...rest } = characterEdit

    const characterEditWithFormatDate = {
      birth: formatDate(birth),
      id,
      ...rest
    } as CharacterEdit

    setStorageItem(id.toString(), characterEditWithFormatDate)
  }, [characterEdit])

  return (
    <Base>
      <NextSeo
        title={`${character.name} - Comic Vine`}
        description={character.deck || ''}
        canonical={`http://localhost:3333/character/${character.slug}`}
        openGraph={{
          url: `http://localhost:3333/character/${character.slug}`,
          title: `${character.name} - Comic Vine`,
          description: character.deck || '',
          images: [
            {
              url: character.images.screen,
              alt: character.name
            }
          ]
        }}
      />

      <S.Wrapper>
        <S.Actions>
          <Button variant="outlined" onClick={handleBack}>
            Go back
          </Button>

          <CharacterForm
            characterEdit={characterEdit}
            handleSubmit={handleSubmit}
            setCharacterEdit={setCharacterEdit}
          />
        </S.Actions>

        <S.Header>
          <Image
            alt={characterEdit.name || character.name}
            src={character.images.screen}
            height={500}
            width={950}
            objectFit="cover"
          />

          <FavoriteButton character={character} />

          <section>
            <h3>
              {characterEdit.name || character.name} -{' '}
              {characterEdit.realName || character.realName}
            </h3>
          </section>
        </S.Header>

        <S.Content>
          <div>
            <small>
              <a
                href={character.site}
                target="_blank"
                rel="noopener noreferrer"
              >
                Character site
              </a>
            </small>
            <small>Gender: {characterEdit.gender || character.gender}</small>
            <small>Origin: {character.origin}</small>
            <small>Publisher: {character.publisher}</small>

            {character.birth && (
              <small>
                Birth: {formatDate(characterEdit.birth) || character.birth}
              </small>
            )}
          </div>

          <TextContent content={character.description} />
        </S.Content>
      </S.Wrapper>
    </Base>
  )
}

export default memo(Character)
