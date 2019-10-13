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
  margin-left: 30px;
  text-decoration: none;
`

const H1 = styled.h1`
  align-items: center;
  background: transparent;
  box-sizing: border-box;
  color: var(--dark-grey);
  display: flex;
  flex-direction: row;
  opacity: .85;
  font-family: Audiowide, monospace;
  font-size: 32px;
  margin-right: 8px;
  position: relative;
  transition: all .4s;
  user-select: none;
  
  :before {
    background: linear-gradient(to right, var(--purple), var(--pink));
    content: attr(data-letters);
    position: absolute;
    z-index: 2;
    overflow: hidden;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;
    width: 0;
    transition: width ease-in-out 0.4s;
  }
  
  :hover {
    :before {
      width: 100%;
    }
  }
  
  @media (max-width: 1080px) {
    font-size: 24px;
  }
  
  @media (max-width: 890px) {
    font-size: 24px;
    background: linear-gradient(to right, var(--purple), var(--pink));
    content: attr(data-letters);
    position: absolute;
    z-index: 2;
    overflow: hidden;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;
    width: 100%;
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

  return <Title to="/"><H1 data-letters="_Idle hands _build nothing">{data.site.siteMetadata.title}</H1></Title>
}
