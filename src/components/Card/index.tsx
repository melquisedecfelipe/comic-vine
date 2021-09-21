import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'

import FavoriteButton from 'components/FavoriteButton'

import * as S from './styles'

import { Character } from 'types/characters'

export type CardProps = {
  character: Character
  isVertical?: boolean
}

const Card = ({ character, isVertical = false }: CardProps) => {
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

        <FavoriteButton character={character} />
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
