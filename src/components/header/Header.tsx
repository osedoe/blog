import React, { FC } from "react"
import styled from "@emotion/styled"
import { Logo } from "./Logo"
import { Nav } from "./Nav"
import useMedia from "../../utils/useMedia"

const Container = styled.div`
  display: flex;
  justify-content: center;
  
  @media (max-width: 890px) {
    width: 100vw;
      
    :before {
      content: '';
      background: var(--pink);
      width: 100%;
      height: 4px;
      top: 0;
      left: 0;
      position: fixed;
    }
  }
`

const Wrapper = styled.header`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 60px;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  max-width: 960px;
`

export const Header: FC = () => {
  const isMobile = useMedia("(max-width: 890px)")

  return <Container>
    <Wrapper>
      <Logo/>
      {!isMobile && <Nav/>}
    </Wrapper>
  </Container>
}
