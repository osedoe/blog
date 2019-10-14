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
  color: var(--dirty-white);
  
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

const Date = styled.span`
  font-family: 'Georgia', serif;
`;

const Hr = styled.hr`
  border: 2px solid var(--pink);
  border-radius: 4px;
  margin-bottom: 30px;
`;

export interface BlogPostProps {
  data: any;
}

const BlogPost: FC<BlogPostProps> = ({ data }) => {
  const post = data.markdownRemark

  return <Layout>
    <Wrapper>
      <H2>_{post.frontmatter.title}</H2>
      <Date>Published on {post.frontmatter.date}</Date>
      <Hr/>
      <div dangerouslySetInnerHTML={{ __html: post.html }}/>
      {post.frontmatter.tags}
    </Wrapper>
  </Layout>
}

BlogPost.displayName = "Post"
export default BlogPost
