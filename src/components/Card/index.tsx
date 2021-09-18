import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'

import * as S from './styles'

export type CardProps = {
  aliases: string | null
  birth: string | null
  deck: string | null
  image: string
  href: string
  name: string
}

const Card = ({ aliases, birth, deck, image, href, name }: CardProps) => {
  const { push } = useRouter()

  return (
    <S.Wrapper
      aria-label="Character"
      role="link"
      onClick={() => push(`character/${href}`)}
    >
      <S.Aside>
        <Image
          alt={name}
          src={image}
          width={175}
          height={250}
          layout="responsive"
          objectFit="cover"
        />
      </S.Aside>

      <S.Section>
        <span>
          {birth && <small>{birth}</small>}
          <h3>{name}</h3>
        </span>

        {deck && <p>{deck}</p>}

        <small>Aliases: {aliases}</small>
      </S.Section>
    </S.Wrapper>
  )
}

export default Card
