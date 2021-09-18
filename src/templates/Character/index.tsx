import Image from 'next/image'
import Router from 'next/router'

import Button from 'components/Button'
import TextContent from 'components/TextContent'

import * as S from './styles'

import { CharacterDetail } from 'types/characters'

import Base from '../Base'

export type CharacterProps = {
  slug?: string
} & CharacterDetail

const Character = ({
  birth,
  description,
  images,
  name,
  origin,
  publisher,
  realName,
  site
}: CharacterProps) => (
  <Base>
    <S.Wrapper>
      <S.Actions>
        <Button variant="outlined" onClick={() => Router.back()}>
          Go back
        </Button>

        <a href={site} target="_blank" rel="noopener noreferrer">
          Site details
        </a>
      </S.Actions>

      <S.Header>
        <Image
          alt={name}
          src={images.screen}
          height={500}
          width={950}
          objectFit="cover"
        />

        <section>
          <h3>
            {name} - {realName}
          </h3>
        </section>
      </S.Header>

      <S.Content>
        <div>
          {birth && <small>Birth: {birth}</small>}
          {origin && <small>Origin: {origin}</small>}
          {publisher && <small>Publisher: {publisher}</small>}
        </div>

        <TextContent content={description} />
      </S.Content>
    </S.Wrapper>
  </Base>
)

export default Character