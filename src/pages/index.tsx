import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { Layout, MiniPost, SEO } from '../components';

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: {published: {eq: true}, contentType: {eq: "blog-post"}}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            spoiler
            slug
            contentType
            published
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
`;

const Intro = styled.div`
  margin: 10px 0 30px;
`;

const P = styled.p`
  color: var(--white);
  font-family: var(--work-sans), sans-serif;
  font-style: italic;
  opacity: .8;
  padding: 0 0 6px;
  margin: 0;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const byBlogPost = post => post.node.frontmatter.contentType === 'blog-post' && post.node.frontmatter.published;
const toMiniPostComponent = ({ node }, index) => <MiniPost key={index} data={node}/>;

export default ({ data }) => {
  const markdownContent = data.allMarkdownRemark;
  const publishedBlogPostCount = markdownContent.totalCount;

  const blogPosts = markdownContent.edges;
  const miniPosts = blogPosts.map(toMiniPostComponent);

  return <Layout>
    <SEO article={false}/>
    <Intro>
      <P>Hola! I'm Ose, a Full Stack developer.</P>
      <P>This is my personal blog, where I write about all things web and not so web.</P>
    </Intro>
    <Main>
      <h2>{publishedBlogPostCount} Posts so far...</h2>
      <div>
        {miniPosts}
      </div>
    </Main>
  </Layout>;
};
