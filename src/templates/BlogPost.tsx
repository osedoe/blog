import React, { FC } from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

const Container = styled.div`

`

export interface BlogPostProps {
  data: any;
}

const BlogPost: FC<BlogPostProps> = ({data}) => {
  const post = data.markdownRemark

  return <Layout>
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  </Layout>
}

export default BlogPost;
