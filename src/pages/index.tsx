import React from "react"
import { Layout } from "../components/Layout"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import { MiniPost } from "../components/miniPost/MiniPost"

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            spoiler
          }
          timeToRead
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

const BlogIndexContainer = styled.div`
  border-radius: 4px;
  padding: 15px 30px;
`

const P = styled.p`
  color: var(--grey);
  font-family: 'Georgia', sans-serif;
  font-style: italic;
  padding: 30px;
  text-align: center;
  opacity: .8;
`

export default ({ data }) => {
  return <Layout>
    <P>Personal blog about all things web and not so web</P>
    <h2>{data.allMarkdownRemark.totalCount} Posts so far...</h2>
    <BlogIndexContainer>
      {data.allMarkdownRemark.edges.map(({ node }) => (<MiniPost data={node}/>))}
    </BlogIndexContainer>
  </Layout>
}
