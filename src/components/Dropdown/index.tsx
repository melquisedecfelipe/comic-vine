import { useState } from 'react'

import { KeyboardArrowDown as ArrowIcon } from '@styled-icons/material-rounded/KeyboardArrowDown'

import * as S from './styles'

export type DropdownProps = {
  children: React.ReactNode
  title: string
}

const Dropdown = ({ children, title }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={() => setIsOpen(!isOpen)}>
        <p aria-label="toogle dropdown">{title}</p> <ArrowIcon />
      </S.Title>

      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
      <S.Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)} />
    </S.Wrapper>
  )
}

export default Dropdown
