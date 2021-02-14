import React, { FC } from 'react';
import { Layout } from '../components/Layout';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { MiniPost } from '../components/miniPost/MiniPost';

const Header = styled.h2`
  font-size: 1.3em;
  text-shadow: var(--text-shadow);
`;

const Ul = styled.ul`
  list-style-type: none;
`;

export interface TagsPageProps {
  pageContext: {
    tag: string;
  };
  data: {
    allMarkdownRemark: {
      edges: any[];
      totalCount: number
    }
  };
}

const Tags: FC<TagsPageProps> = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } about ${tag}`;

  return <Layout>
    <Header>{tagHeader}</Header>
    <Ul>
      {edges.map(({ node }) => {
        const { slug } = node.fields;
        return <li key={slug}>
          <MiniPost data={node}/>
        </li>;
      })}
    </Ul>
  </Layout>;
};

export default Tags;

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
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            date
            spoiler
          }
        }
      }
    }
  }
`;
