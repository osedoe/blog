import React from "react"
import { Layout } from "../components/Layout"
import styled from "@emotion/styled"
import { graphql } from "gatsby"

const BlogIndexContainer = styled.div`
  background: linear-gradient(to top left, var(--purple), var(--pink));
  border-radius: 4px;
  padding: 15px;
`;

const P = styled.p`
  color: var(--grey);
  font-family: Monaco, sans-serif;
  font-style: italic;
  padding: 30px;
  text-align: center;
  opacity: .8;
`

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
          }
          excerpt
        }
      }
    }
  }
`

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`

export default ({ data }) => {
  return <Container>
    <Layout>
      <P>Personal blog about all things web and not so web</P>
      <h2>{data.allMarkdownRemark.totalCount} Posts so far...</h2>
      <BlogIndexContainer>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title}{" "}
            <span>— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
      </BlogIndexContainer>
    </Layout>
  </Container>
}
