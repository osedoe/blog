import React, { FC } from "react"
import { Layout } from "../components/Layout"
import { graphql, Link } from "gatsby"

// const query = graphql`
//     query {
//         allMarkdownRemark {
//         group(field: frontmatter___tags) {
//           edges {
//             node {
//               frontmatter {
//                 title
//               }
//             }
//           }
//           fieldValue
//         }
//       }
//     }
// `
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
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export interface TagsPagePros {
  pageContext?: any;
  data?: any;
}

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  return <Layout>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/tags">All tags</Link>
    </Layout>
}

export default Tags;
