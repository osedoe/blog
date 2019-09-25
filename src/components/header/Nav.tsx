import React, { FC } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Container = styled.nav`
  color: var(--gray);
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
`;

const Li = styled(Link)`
  color: var(--gray);
  padding: 0 30px;
  text-decoration: none;
  user-select: none;
`;

export const Nav: FC = () => {
  return <Container>
    <Li to="/">_Blog</Li>
    {/*<Link to={`/projects`}>Projects</Link>*/}
    <Li to="/About">_About</Li>
  </Container>
}
