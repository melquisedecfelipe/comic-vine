import Image from 'next/image'

import Button from 'components/Button'
import FavoriteButton from 'components/FavoriteButton'
import TextContent from 'components/TextContent'

import * as S from './styles'

import { CharacterDetail } from 'types/characters'

import Base from '../Base'

export type CharacterProps = {
  handleBack: () => void
  slug?: string
  character: CharacterDetail
}

const Character = ({ character, handleBack }: CharacterProps) => (
  <Base>
    <S.Wrapper>
      <S.Actions>
        <Button variant="outlined" onClick={handleBack}>
          Go back
        </Button>

        <a href={character.site} target="_blank" rel="noopener noreferrer">
          Site details
        </a>
      </S.Actions>

      <S.Header>
        <Image
          alt={character.name}
          src={character.images.screen}
          height={500}
          width={950}
          objectFit="cover"
        />

        <FavoriteButton character={character} />

        <section>
          <h3>
            {character.name} - {character.realName}
          </h3>
        </section>
      </S.Header>

      <S.Content>
        <div>
          {character.birth && <small>Birth: {character.birth}</small>}
          {character.gender && <small>Gender: {character.gender}</small>}
          {character.origin && <small>Origin: {character.origin}</small>}
          {character.publisher && (
            <small>Publisher: {character.publisher}</small>
          )}
        </div>

        <TextContent content={character.description} />
      </S.Content>
    </S.Wrapper>
  </Base>
)

export default Character
