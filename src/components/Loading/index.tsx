import { LoaderAlt as LoaderIcon } from '@styled-icons/boxicons-regular/LoaderAlt'

import * as S from './styles'

export type LoadingProps = {
  isFullPage?: boolean
}

const Loading = ({ isFullPage = false }: LoadingProps) => (
  <S.Wrapper aria-label="Loading" role="svg" $isFullPage={isFullPage}>
    <LoaderIcon />
  </S.Wrapper>
)

export default Loading
