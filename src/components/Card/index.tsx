import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'

import { memo, useState } from 'react'

import FavoriteButton from 'components/FavoriteButton'

import { getStorageItem } from 'utils/localStorage'

import * as S from './styles'

import { Character, CharacterEdit } from 'types/characters'

export type CardProps = {
  character: Character
  isVertical?: boolean
}

const Card = ({ character, isVertical = false }: CardProps) => {
  const { push } = useRouter()

  const [characterEdit] = useState<CharacterEdit>(() => {
    const characterEditStorage = getStorageItem(character.id.toString())

    if (characterEditStorage) {
      return characterEditStorage
    }

    return {}
  })

  return (
    <S.Wrapper $isVertical={isVertical}>
      <S.ImageWrapper>
        <Image
          alt={characterEdit.name || character.name}
          src={character.images.small}
          width={175}
          height={250}
          layout="responsive"
          objectFit="cover"
        />

        <FavoriteButton character={character} />
      </S.ImageWrapper>

      <S.Section
        aria-label="Character"
        role="link"
        onClick={() => push(`character/${character.slug}`)}
      >
        <span>
          {!isVertical && character.birth && (
            <small>{characterEdit.birth || character.birth}</small>
          )}
          <h3>{characterEdit.name || character.name}</h3>
        </span>

        {!isVertical && character.deck && <p>{character.deck}</p>}
        {!isVertical && character.aliases && (
          <small>Aliases: {characterEdit.aliases || character.aliases}</small>
        )}
        {!isVertical && character.gender && (
          <small>Gender: {characterEdit.gender || character.gender}</small>
        )}
      </S.Section>
    </S.Wrapper>
  )
}

export default memo(Card)
