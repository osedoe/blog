import React from "react"
import styled from "@emotion/styled"
import { graphql, Link, useStaticQuery } from "gatsby"

const Title = styled(Link)`
  margin-left: 30px;
  text-decoration: none;
`

const H1 = styled.h1`
  align-items: center;
  background: transparent;
  box-sizing: border-box;
  background: linear-gradient(to right, var(--blue), var(--pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  flex-direction: row;
  opacity: .85;
  font-family: var(--space-mono);
  font-size: 2.3em;
  font-weight: bold;
  margin: 0 8px 0 0;
  position: relative;
  transition: all .4s;
  user-select: none;
  
  @media (max-width: 1150px) {
    font-size: 1.8em;
  }
  
  @media (max-width: 1020px) {
    font-size: 1.4em;
    :hover {
      transform: none;
    }
  }
  
  
  @media (max-width: 890px) {
    font-size: 24px;
    background: linear-gradient(to right, var(--blue), var(--pink));
    content: attr(data-letters);
    position: absolute;
    z-index: 2;
    overflow: hidden;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;
    transition: width ease-in-out 0.4s;
    margin: 0;
  }
`

export const Logo = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  )

  return <Title to="/">
    <H1 data-letters="_Idle hands _build nothing">
      {data.site.siteMetadata.title}
    </H1>
  </Title>
}
