import Button from 'components/Button'

import { TypeProps } from 'hooks/useCharacters'

import * as S from './styles'

export type PaginateProps = {
  handlePage: (type: TypeProps) => void
  page: number
  totalPages: number
}

const Paginate = ({ handlePage, page, totalPages }: PaginateProps) => (
  <S.Wrapper>
    <Button
      aria-label="Previous"
      disabled={page === 1}
      onClick={() => handlePage('PREVIOUS')}
      variant="outlined"
    >
      Previous
    </Button>

    <Button
      aria-label="Next"
      disabled={page === totalPages}
      onClick={() => handlePage('NEXT')}
      variant="filled"
    >
      Next
    </Button>
  </S.Wrapper>
)

export default Paginate
