import React, { FC } from "react"
import { Header } from "./header/Header"
import { SocialBar } from "./SocialBar"
import styled from "@emotion/styled"
import useMedia from "../utils/useMedia"

const Container = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  //min-width: 100vw;
  max-width: 960px;
`

const Wrapper = styled.div`
  padding: 60px 120px;
  
  @media (max-width: 790px) {
    padding: 10px 30px;
  }
`

export const Layout: FC = ({ children }) => {
  const isMobile = useMedia("(max-width: 890px)")

  return <Container>
    <Header/>
    <Wrapper>
      {children}
    </Wrapper>
    {!isMobile && <SocialBar/>}
  </Container>
}
