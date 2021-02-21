const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const toKebabCase = (string) => {
  return string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
};

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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const BlogPostTemplate = path.resolve(`./src/templates/BlogPost.tsx`);
  const TagsPageTemplate = path.resolve(`./src/templates/TagsPage.tsx`);

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
            }
          }
        }
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  // Create single blog post pages
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach(post => {
    createPage({
      path: `posts/${post.node.frontmatter.slug}`, //node.fields.slug,
      component: BlogPostTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: post.node.fields.slug
      }
    });
  });

  const tags = result.data.allMarkdownRemark.group;
  tags.forEach(tag => {
    createPage({
      path: `tags/${toKebabCase(tag.fieldValue)}/`,
      component: TagsPageTemplate,
      context: {
        tag: tag.fieldValue
      }
    });
  });
};
