import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash.get'

import Layout from '../components/layout'
import BlogPosts from '../components/blogPosts'

const Tags = (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const posts = get(props, 'data.posts.edges')
  const tag = get(props, 'pageContext.tag')
  const title = `Tag: tag: ${tag} | ${siteTitle}`

  return (
    <Layout
      location={props.location}
      title={title}
      siteDescription={`Tag`}
      siteTitle={title}
    >
      <h2>Tag: {tag}</h2>
      <BlogPosts posts={posts} />
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query PostsByTag($tag: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    posts: allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`
