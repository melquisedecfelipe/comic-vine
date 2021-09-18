import { ReactNode, useCallback } from 'react'

import { Container } from 'components/Container'
import ScrollButtons from 'components/ScrollButtons'

import * as S from './styles'

type BaseProps = {
  children: ReactNode
}

const Base = ({ children }: BaseProps) => {
  const handleDown = useCallback(() => {
    window.scrollTo(0, document.body.scrollHeight)
  }, [])

  const handleUp = useCallback(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      <S.Wrapper>
        <S.Header>
          <h3>Comic Vine</h3>
          <p>Comic Vine is the largest comic book wiki in the universe.</p>
        </S.Header>

        {children}

        <ScrollButtons handleDown={handleDown} handleUp={handleUp} />
      </S.Wrapper>
    </Container>
  )
}

export default Base
