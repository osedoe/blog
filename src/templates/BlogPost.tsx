import React, { FC } from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { Layout, MainBody, SEO } from '../components';

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
`;

const Wrapper = styled.div`
  color: var(--dirty-white);
`;

const H2 = styled.h2`
  color: var(--blue);
  font-family: var(--space-mono);
  font-size: 26px;
  text-shadow: var(--text-shadow);
`;

const Date = styled.span`
  font-family: var(--work-sans);
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
  const post = data.markdownRemark;

  return <Layout>
    <SEO article={true} title={post.frontmatter.title}/>
    <Wrapper>
      <H2>{post.frontmatter.title}</H2>
      <Date>Published on {post.frontmatter.date}</Date>
      <Hr/>
      <MainBody data={post}/>
      {/* TODO: Add tags related , join newsletter and share buttons */}
      {/*<TagWrapper>*/}
      {/*{post.frontmatter.tags.map(tag => <Tag>{tag}</Tag>)}*/}
      {/*</TagWrapper>*/}
    </Wrapper>
  </Layout>;
};

BlogPost.displayName = 'Post';
export default BlogPost;
