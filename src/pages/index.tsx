import React from "react"
import { Layout } from "../components/Layout"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import { Jumbotron } from "../components/jumbotron/Jumbotron"

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
      <Jumbotron/>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title}{" "}
            <span>— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  </Container>
}
