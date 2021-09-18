import * as S from './styles'

export type TextContentProps = {
  content: string
}

const TextContent = ({ content }: TextContentProps) => (
  <S.Wrapper dangerouslySetInnerHTML={{ __html: content }} />
)

export default TextContent
