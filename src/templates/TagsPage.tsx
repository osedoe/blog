import React, { FC } from "react"
import { Layout } from "../components/Layout"
import { graphql } from "gatsby"

const query = graphql`
    query {
        allMarkdownRemark {
        group(field: frontmatter___tags) {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
          fieldValue
        }
      }
    }
`


export interface TagsPagePros {
  pageContext?: any;
}

const TagsPage: FC<TagsPagePros> = ({ pageContext }) => {
  return <Layout>
      123123
  </Layout>
}
