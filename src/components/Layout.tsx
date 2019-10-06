import React, { FC } from "react"
import { Header } from "./header/Header"
import { SocialBar } from "./SocialBar"
import styled from "@emotion/styled"

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  background: var(--white);
  min-height: 100vh;
  min-width: 100vw;
`

const Wrapper = styled.div`
  padding: 60px 120px;
  
  @media (max-width: 790px) {
    padding: 10px 50px;
  }
`

export const Layout: FC = ({ children }) => {
  return <Container>
    <Header/>
    <Wrapper>
      {children}
    </Wrapper>
    <SocialBar/>
  </Container>
}