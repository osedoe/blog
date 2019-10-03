import React, { FC } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Container = styled.nav`
  color: var(--dirty-white);
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
`;

const Li = styled(Link)`
  color: var(--gray);
  padding: 15px 30px;
  text-decoration: none;
  user-select: none;
  position: relative;
  
  :before {
      background: var(--yellow);
      border-radius: 4px;
      content: '';
      position: absolute;
      top: 50%;
      left: 15%;
      height: 0;
      width: 70%;
      z-index: -1;
      transition: all 500ms ease-in-out;
    }
  
  
  &:hover {
    transform: scale(1.1);
  
    :before {
      background: var(--yellow);
      border-radius: 4px;
      content: '';
      position: absolute;
      top: 50%;
      left: 15%;
      height: 30%;
      width: 70%;
      z-index: -1;
      transition: all 200ms ease-out;
    }
  }
`;

export const Nav: FC = () => {
  return <Container>
    <Li to="/">_Blog</Li>
    {/*<Link to={`/projects`}>Projects</Link>*/}
    <Li to="/About">_About</Li>
  </Container>
}
