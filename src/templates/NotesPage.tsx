import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { Layout, MainBody, SEO } from '../components';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title,
        tags
      }
    }
  }
`;

interface NotesPageProps {
  data: any;
}

const NotesPage: FC<NotesPageProps> = ({ data: { markdownRemark: note } }) => {
  // const note = data.markdownRemark;
  return <Layout withSidebar={false}>
    <SEO article={true} title={note.frontmatter.title}/>
    <MainBody data={note}/>
  </Layout>;
};

NotesPage.displayName = 'NotesPage';
export default NotesPage;
