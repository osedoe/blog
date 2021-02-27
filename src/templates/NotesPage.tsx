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
        tags
      }
    }
  }
`;

const ContentContainer = styled.div`
  box-sizing: border-box;
  width: available;
`;

interface NotesPageProps {
  data: any;
}

const NotesPage: FC<NotesPageProps> = ({ data }) => {
  const note = data.markdownRemark;
  console.log('🍓', data);
  return <Layout withSidebar={false}>
    <SEO article={true} title={note.frontmatter.title}/>
    {/*<SEO article={true}/>*/}
    <MainBody data={note}/>
  </Layout>;
};

NotesPage.displayName = 'NotesPage';
export default NotesPage;
