import React from "react"
import { Layout } from "../components/Layout"
import styled from "@emotion/styled"
import { graphql } from "gatsby"

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
  background: #12c2e9;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom right, #f64f59, #c471ed, #12c2e9);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom right, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  min-height: 100vh;
  min-width: 100vw;
`

export default ({ data }) => {
  return <Container>
    <Layout>
      <h1>Ose's last posts</h1>
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
