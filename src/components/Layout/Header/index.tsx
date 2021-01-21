import * as React from "react"

import { Link } from "gatsby"

import * as S from "./Header.styles"
import { HeaderProps } from "./Header.types"

const Header = ({ title }: HeaderProps) => (
  <S.Wrapper>
    <S.Navigation>
      <S.Title>
        <Link to="/">{title}</Link>
      </S.Title>
    </S.Navigation>
  </S.Wrapper>
)

export { Header }
