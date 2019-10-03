import React from "react"
import styled from "@emotion/styled"
import { graphql, Link, useStaticQuery } from "gatsby"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Title = styled(Link)`
  text-decoration: none;
`

const H1 = styled.h1`
  align-items: center;
  box-sizing: border-box;
  color: var(--gray);
  display: flex;
  flex-direction: row;
  font-family: Audiowide, monospace;
  font-size: 20px;
  height: 32px;
  justify-content: center;
  margin: 16px;
  opacity: .85;
  pointer-events: none;
  position: relative;
  text-align: center;
  user-select: none;
  width: 160px;
  
  @media (max-width: 1000px) {
    font-size: 16px;
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
    `
  )

  return <Title to="/"><H1>{data.site.siteMetadata.title}</H1></Title>
}
