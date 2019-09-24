import React, { FC } from "react"
import styled from "@emotion/styled"
import { Logo } from "./Logo"
import { Nav } from "./Nav"

const Container = styled.div`
  background: #1D2029;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 180px auto;
  grid-template-rows: 60px;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
`;

export const Header: FC = () => {
    return <Container>
        <Logo/>
        <Nav/>
    </Container>;
};
