import React, { FC } from "react"
import { Layout } from "../components/Layout"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import useMedia from "../utils/useMedia"
import { MiniPost } from "../components/miniPost/MiniPost"

const Header = styled.h2`
  font-size: 1.3em;
  text-shadow: var(--text-shadow);
`

const Title = styled.div`
  color: var(--pink);
  display: flex;
  align-items: center;
  font-size: 26px;
  margin: 3px 0 6px;
  
  a {
    margin: 0;
  }
  
  @media (max-width: 890px) {
    font-size: 20px;
  }
`

const Ul = styled.ul`
  list-style-type: none;
`

const Li = styled.li``

const Date = styled.small`
color: var(--grey);
  font-family: var(--work-sans);
  font-style: italic;
  
  :hover {
  text-decoration: underline;
  }
`

const TimeToRead = styled.span`
  color: var(--blue);
  font-family: var(--work-sans);
  font-size: .6em;
  width: 100px;
  margin-left: 10px;
`

export interface TagsPageProps {
  pageContext: {
    tag: string;
  };
  data: {
    allMarkdownRemark: {
      edges: any[];
      totalCount: number
    }
  };
}

const Tags: FC<TagsPageProps> = ({ pageContext, data }) => {
  const isMobile = useMedia("(max-width: 960px)")
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } about ${tag}`

  return <Layout>
    <Header>{tagHeader}</Header>
    <Ul>
      {edges.map(({ node }) => {
        const { slug } = node.fields
        return <Li key={slug}>
          <MiniPost data={node}/>
        </Li>
      })}
    </Ul>
  </Layout>
}

export default Tags

export const query = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            date
            spoiler
          }
        }
      }
    }
  }
`
