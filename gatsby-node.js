const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

const createPost = (createPage, edge) => {
  const BlogPostTemplate = path.resolve(`./src/templates/BlogPost.tsx`);
  // const previous = index === edge.length - 1 ? null : edge[index + 1].node;
  // const next = index === 0 ? null : edge[index - 1].node;
  createPage({
    path: `posts/${edge.node.frontmatter.slug}`, //node.fields.slug,
    component: BlogPostTemplate,
    context: {
      // Data passed to context is available
      // in page queries as GraphQL variables.
      slug: edge.node.fields.slug
      // previous,
      // next
    }
  });
};

const createNote = (createPage, edge) => {
  const NotesTemplate = path.resolve('./src/templates/NotesPage.tsx');
  createPage({
    path: `notes/${edge.node.frontmatter.slug}`,
    component: NotesTemplate,
    context: {
      slug: edge.node.fields.slug
    }
  });
};

const isPublishedBlogPost = edge =>
  Boolean(edge.node.frontmatter.published)
  && edge.node.frontmatter.contentType === 'blog-post';

const isPublishedNotes = edge =>
  Boolean(edge.node.frontmatter.published)
  && edge.node.frontmatter.contentType === 'notes';

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // allMarkdownRemark(filter: { frontmatter: {published: {eq: true} }}) {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD MMMM, YYYY")
              title
              tags
              slug
              contentType
              published
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    console.error('Error running GraphQL query');
    return;
  }

  // Create single blog post pages
  const { edges } = result.data.allMarkdownRemark;
  edges.forEach((edge) => {
    if (isPublishedBlogPost(edge)) {
      createPost(createPage, edge);
    }

    if (isPublishedNotes(edge)) {
      createNote(createPage, edge);
    }
  });
};
