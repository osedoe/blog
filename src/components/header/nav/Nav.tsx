import React, { FC } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Container = styled.nav`
  color: var(--dirty-white);
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
  font-family: var(--space-mono);
`

const Li = styled(Link)`
  color: var(--dirty-white);
  font-size: 22px;
  padding: 15px 30px;
  text-decoration: none;
  text-shadow: var(--text-shadow);
  user-select: none;
  position: relative;
  z-index: 2;
  
  :before {
      background: linear-gradient(to right, var(--blue), var(--pink));
      border-radius: 4px;
      content: '';
      height: 0;
      left: 25%;
      position: absolute;
      top: 50%;
      transition: all 500ms ease-in-out;
      width: 50%;
      z-index: -1;
    }
  
  &:hover {
    color: var(--dirty-white);
    //text-shadow: 0 0 2px var(--dirty-white);
  
    :before {
      background: linear-gradient(to right, var(--blue), var(--pink));
      box-shadow: var(--shadow);
      border-radius: 4px;
      content: '';
      position: absolute;
      top: 52%;
      left: 15%;
      height: 30%;
      width: 70%;
      transition: all 200ms ease-out;
      z-index: -1;
    }
  }
  
  @media (max-width: 890px) {
    font-size: 16px;
  }
  
  @media (max-width: 890px) {
    font-size: 16px;
  }
`

export const Nav: FC = () => {
  return <Container>
    <Li to="/">_Blog</Li>
    {/*<Link to={`/projects`}>Projects</Link>*/}
    <Li to="/About">_About</Li>
  </Container>
}
