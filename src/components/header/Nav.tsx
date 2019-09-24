import React, { FC } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Container = styled.nav`
  color: var(--black);
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
  opacity: .85;
  
  & a {
    padding: 0 30px;
    text-decoration: none;
    user-select: none;
  }
`

export const Nav: FC = () => {

  return <Container>
    <Link to={`/`}>_Blog</Link>
    {/*<Link to={`/projects`}>Projects</Link>*/}
    <Link to={`/about`}>_About</Link>
  </Container>
}
