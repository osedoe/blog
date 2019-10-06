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

const Wrapper = styled.div`
  //max-width: 960px;
  
  & div {
    font-family: 'Georgia', serif;
  }
  
  @media (max-width: 790px) {
    & iframe {
      width: 100%;
    } 
  }
  
`

export interface BlogPostProps {
  data: any;
}

const BlogPost: FC<BlogPostProps> = ({ data }) => {
  const post = data.markdownRemark

  return <Layout>
    <Wrapper>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}/>
    </Wrapper>
  </Layout>
}

export default BlogPost
