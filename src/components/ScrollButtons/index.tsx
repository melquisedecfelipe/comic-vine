import Button from 'components/Button'

import * as S from './styles'

export type ScrollButtonsProps = {
  handleDown: () => void
  handleUp: () => void
}

const ScrollButtons = ({ handleDown, handleUp }: ScrollButtonsProps) => (
  <S.Wrapper>
    <Button aria-label="Down" variant="outlined" onClick={handleDown}>
      Down
    </Button>
    <Button aria-label="Up" variant="outlined" onClick={handleUp}>
      Up
    </Button>
  </S.Wrapper>
)

export default ScrollButtons
