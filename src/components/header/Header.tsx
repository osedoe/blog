import React, { FC } from "react"
import styled from "@emotion/styled"
import { Logo } from "./Logo"
import { Nav } from "./Nav"

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

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
  return <Container>
    <Wrapper>
      <Logo/>
      <Nav/>
    </Wrapper>
  </Container>
}
