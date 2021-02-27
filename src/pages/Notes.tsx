import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Layout } from '../components';

const webDevelopmentNotes = graphql`
query getAllPublishedNotes {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: {published: {eq: true}, contentType: {eq: "notes"}}}) {
      edges {
        node {
          frontmatter {
            title
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

export default () => {
  const data = useStaticQuery(webDevelopmentNotes);
  return <Layout>
    Notes:
    <ul>
      {data.allMarkdownRemark.edges.map(article => <li>{article.node.frontmatter.title}</li>)}
    </ul>
  </Layout>;
};
