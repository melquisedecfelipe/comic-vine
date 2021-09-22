import { KeyboardArrowDown as ArrowDownIcon } from '@styled-icons/material-rounded/KeyboardArrowDown'
import { KeyboardArrowUp as ArrowUpIcon } from '@styled-icons/material-rounded/KeyboardArrowUp'

import Button from 'components/Button'

import * as S from './styles'

export type ScrollButtonsProps = {
  handleDown: () => void
  handleUp: () => void
}

const ScrollButtons = ({ handleDown, handleUp }: ScrollButtonsProps) => (
  <S.Wrapper>
    <Button aria-label="Down" variant="outlined" onClick={handleDown}>
      <ArrowDownIcon />
    </Button>
    <Button aria-label="Up" variant="outlined" onClick={handleUp}>
      <ArrowUpIcon />
    </Button>
  </S.Wrapper>
)

export default ScrollButtons
