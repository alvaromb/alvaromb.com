const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const get = require('lodash.get')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create blog pages
  const blogPost = await path.resolve('./src/templates/blog-post.js')
  const postQuery = await graphql(`
    {
      allFile(
        sort: { fields: childrenMarkdownRemark___frontmatter___date, order: DESC }
        filter: { sourceInstanceName: { eq: "blog" } }
      ) {
        nodes {
          childMarkdownRemark {
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
  const appPage = await path.resolve('./src/templates/project-page.js')
  const appQuery = await graphql(`
    {
      allFile(
        sort: { fields: childrenMarkdownRemark___frontmatter___date, order: DESC }
        filter: {
          sourceInstanceName: { eq: "apps" }
          childrenMarkdownRemark: { elemMatch: { id: { nin: "null" } } }
        }
      ) {
        nodes {
          childMarkdownRemark {
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

  // Generate tags pages
  const tagPage = await path.resolve('./src/templates/tag-page.js')
  const tagsQuery = await graphql(`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "blog" }
          childMarkdownRemark: { frontmatter: { tags: {} } }
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                tags
              }
            }
          }
        }
      }
    }
  `)

  if (tagsQuery.errors) {
    console.error(tagsQuery.errors)
    return tagsQuery.errors
  }

  // Create tag pages
  const tags = new Set()
  tagsQuery.data.allFile.edges.forEach((post, index) => {
    const postTags = get(post, 'node.childMarkdownRemark.frontmatter.tags')
    postTags.forEach((tag) => tags.add(tag))
  })
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${tag}`,
      component: tagPage,
      context: {
        tag,
      },
    })
  })

  // Generate notes
  const notesPage = await path.resolve('./src/templates/note-page.js')
  const notesQuery = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "notes" } }) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    }
  `)

  if (notesQuery.errors) {
    console.error(notesQuery.errors)
    return notesQuery.errors
  }

  // Create notes pages
  notesQuery.data.allFile.edges.forEach(({ node }, index) => {
    createPage({
      path: node.childMarkdownRemark.fields.slug,
      component: notesPage,
      context: {
        slug: node.childMarkdownRemark.fields.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    let path = value
    if (node.frontmatter.category === 'blog') {
      path = `/blog${value}`
    } else if (node.frontmatter.category === 'app') {
      path = `/projects${value}`
    }
    createNodeField({
      name: `slug`,
      node,
      value: path,
    })
  }
}
