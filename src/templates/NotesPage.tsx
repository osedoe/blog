import React, { FC } from 'react';
import { Layout, SEO } from '../components';
import { graphql } from 'gatsby';

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

interface NotesPageProps {
  data: any;
}

const NotesPage: FC<NotesPageProps> = ({ data }) => {
  const note = data.markdownRemark;
  console.log('🍓', data);
  return <Layout>
    {/*<SEO article={true} title={note.frontmatter.title}/>*/}
    <SEO article={true}/>
    <div dangerouslySetInnerHTML={{ __html: data.html }}/>
  </Layout>;
};

NotesPage.displayName = 'NotesPage';
export default NotesPage;
