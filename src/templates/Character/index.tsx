import { NextSeo } from 'next-seo'
import Image from 'next/image'

import { memo } from 'react'

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
          <small>
            <a href={character.site} target="_blank" rel="noopener noreferrer">
              Character site
            </a>
          </small>
          <small>Gender: {character.gender}</small>
          <small>Origin: {character.origin}</small>
          <small>Publisher: {character.publisher}</small>

          {character.birth && <small>Birth: {character.birth}</small>}
        </div>

        <TextContent content={character.description} />
      </S.Content>
    </S.Wrapper>
  </Base>
)

export default memo(Character)
