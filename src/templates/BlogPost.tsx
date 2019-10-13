import React, { FC } from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title,
        date(formatString: "DD MMMM, YYYY"),
        tags
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

const H2 = styled.h2`
  color: var(--purple);
  font-size: 26px;
`

export interface BlogPostProps {
  data: any;
}

const BlogPost: FC<BlogPostProps> = ({ data }) => {
  const post = data.markdownRemark

  return <Layout>
    <Wrapper>
      <H2>_{post.frontmatter.title}</H2>
      Published on {post.frontmatter.date}
      {post.frontmatter.tags}
      <div dangerouslySetInnerHTML={{ __html: post.html }}/>
    </Wrapper>
  </Layout>
}

BlogPost.displayName = "Post"
export default BlogPost
