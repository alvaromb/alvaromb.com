const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create blog pages
  const blogPost = await path.resolve('./src/templates/blog-post.js')
  const postQuery = await graphql(`
    {
      allFile(
        sort: {
          fields: childrenMarkdownRemark___frontmatter___date
          order: DESC
        }
        filter: { sourceInstanceName: { eq: "blog" } }
        limit: 20
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (postQuery.errors) {
    console.error(postQuery.errors)
    return postQuery.errors
  }
  // Create blog posts pages
  const posts = postQuery.data.allFile.nodes
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: post.childMarkdownRemark.fields.slug,
      component: blogPost,
      context: {
        slug: post.childMarkdownRemark.fields.slug,
        previous,
        next,
      },
    })
  })

  // Create app portfolio pages
  // TODO: change template
  const appPage = await path.resolve('./src/templates/blog-post.js')
  const appQuery = await graphql(`
    {
      allFile(
        sort: {
          fields: childrenMarkdownRemark___frontmatter___date
          order: DESC
        }
        filter: {
          sourceInstanceName: { eq: "apps" }
          childrenMarkdownRemark: { elemMatch: { id: { nin: "null" } } }
        }
        limit: 20
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (appQuery.errors) {
    console.error(appQuery.errors)
    return appQuery.errors
  }

  // Create apps pages
  appQuery.data.allFile.nodes.forEach((app, index) => {
    createPage({
      path: app.childMarkdownRemark.fields.slug,
      component: appPage,
      context: {
        slug: app.childMarkdownRemark.fields.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
