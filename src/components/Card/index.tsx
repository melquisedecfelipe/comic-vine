import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'

import { Heart as HeartIcon } from '@styled-icons/boxicons-regular/Heart'
import { Heart as HeartFillIcon } from '@styled-icons/boxicons-solid/Heart'

import Button from 'components/Button'

import * as S from './styles'

import { Character } from 'types/characters'

export type CardProps = {
  character: Character
  handleAddFavorite: (character: Character) => void
  handleRemoveFavorite: (id: number) => void
  isFavorite: (id: number) => boolean
  isVertical?: boolean
}

const Card = ({
  character,
  handleAddFavorite,
  handleRemoveFavorite,
  isFavorite,
  isVertical = false
}: CardProps) => {
  const { push } = useRouter()

  return (
    <S.Wrapper $isVertical={isVertical}>
      <S.ImageWrapper>
        <Image
          alt={character.name}
          src={character.images.small}
          width={175}
          height={250}
          layout="responsive"
          objectFit="cover"
        />

        {isFavorite(character.id) ? (
          <Button
            aria-label="Remove Favorite"
            onClick={() => handleRemoveFavorite(character.id)}
          >
            <HeartFillIcon />
          </Button>
        ) : (
          <Button
            aria-label="Add Favorite"
            onClick={() => handleAddFavorite(character)}
          >
            <HeartIcon />
          </Button>
        )}
      </S.ImageWrapper>

      <S.Section
        aria-label="Character"
        role="link"
        onClick={() => push(`character/${character.slug}`)}
      >
        <span>
          {!isVertical && character.birth && <small>{character.birth}</small>}
          <h3>{character.name}</h3>
        </span>

        {!isVertical && character.deck && <p>{character.deck}</p>}
        {!isVertical && <small>Aliases: {character.aliases}</small>}
      </S.Section>
    </S.Wrapper>
  )
}

export default Card
