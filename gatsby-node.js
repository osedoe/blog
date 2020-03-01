const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postsQuery = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const tagsQuery = await graphql(`
    query {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          edges {
            node {
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    }
  `)

  // Create single blog post pages
  const posts = postsQuery.data.allMarkdownRemark.edges
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/BlogPost.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })

const tags = tagsQuery.data.allMarkdownRemark.edges
  createPage({
    path: `/tags`,
    component: path.resolve(`./src/templates/TagsPage.tsx`),
    context: {
      tag,
    },
  })
}
