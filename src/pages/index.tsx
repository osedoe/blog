import React from "react"
import { Layout } from "../components/Layout"
import styled from "@emotion/styled"
import { graphql, Link } from "gatsby"

const BlogIndexContainer = styled.div`
  border-radius: 4px;
  box-shadow: 0 0 8px var(--purple);
  padding: 15px 30px;
`

const BlogLink = styled(Link)`
  text-decoration: none;
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
            <BlogLink to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}{" "}
                <span>— {node.frontmatter.date}</span>
                <span> ({node.timeToRead} min.)</span>
              </h3>
              <p>{node.excerpt}</p>
            </BlogLink>
          </div>
        ))}
      </BlogIndexContainer>
    </Layout>
  </Container>
}
