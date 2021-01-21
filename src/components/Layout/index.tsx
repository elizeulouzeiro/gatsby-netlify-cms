import * as React from "react"

import { useStaticQuery, graphql } from "gatsby"

import { GlobalStyle } from "src/styles/GlobalStyle"

import * as S from "./Layout.styles"
import { Header } from "./Header"

import { ISite } from "./Layout.types"

const Layout: React.FC = ({ children }) => {
  const data: ISite = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header title={data.site.siteMetadata.title} />
      <S.Main>{children}</S.Main>
    </>
  )
}

export { Layout }
