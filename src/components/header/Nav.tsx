import React, { FC } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  color: var(--white);
  margin-right: 30px;
  
  & a {
    padding: 0 30px;
    text-decoration: none;
  }
`;

export const Nav: FC = () => {

    return <Container>
      <Link to={`/`}>Blog</Link>
      {/*<Link to={`/projects`}>Projects</Link>*/}
      <Link to={`/about`}>About</Link>
    </Container>;
};
