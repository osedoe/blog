import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Layout } from '../components';

const webDevelopmentNotes = graphql`
query getAllPublishedNotes {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: {published: {eq: true}, contentType: {eq: "notes"}}}) {
      edges {
        node {
          id
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
      {data.allMarkdownRemark.edges.map(article => {
        const noteRoute = `/notes/${article.node.frontmatter.slug}`;
        return <li id={article.node.id}><Link id={article.node.id} to={noteRoute}>{article.node.frontmatter.title}</Link></li>;
      })}
    </ul>
  </Layout>;
};
