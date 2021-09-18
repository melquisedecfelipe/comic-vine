import Button from 'components/Button'

import * as S from './styles'

export type ScrollButtonsProps = {
  handleDown: () => void
  handleUp: () => void
}

const ScrollButtons = ({ handleDown, handleUp }: ScrollButtonsProps) => (
  <S.Wrapper>
    <Button variant="outlined" onClick={handleDown} arial-label="Down">
      Down
    </Button>
    <Button variant="outlined" onClick={handleUp} arial-label="Up">
      Up
    </Button>
  </S.Wrapper>
)

export default ScrollButtons
