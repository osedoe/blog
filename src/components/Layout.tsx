import React, { FC } from "react"
import { Header } from "./header/Header"
import { SocialBar } from "./social/SocialBar"
import styled from "@emotion/styled"
import useMedia from "../utils/useMedia"
import { TagsContainer } from "./tags/TagsContainer"

const Container = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  grid-template-areas: "header header"
                       "main     side"
                       "footer footer"
  ;
  grid-gap: 60px;
  margin: 0 auto;
  min-height: 100vh;
  max-width: 960px;
  padding: 0 120px;
`

const MainContent = styled.div`
  grid-area: main;
  
  @media (max-width: 790px) {
    padding: 10px 30px;
  }
`

const SideContent = styled.div`
  grid-area: side;
`

export const Layout: FC = ({ children }) => {
  const isMobile = useMedia("(max-width: 890px)")

  return <Container>
    <Header/>
    <MainContent>
      {children}
    </MainContent>
    <SideContent>
      <TagsContainer/>
    </SideContent>
    {!isMobile && <SocialBar/>}
  </Container>
}

Layout.displayName = "Layout"
