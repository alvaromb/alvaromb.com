import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash.get'

import Layout from '../components/layout'
import BlogPosts from '../components/blogPosts'

const Blog = (props) => {
  const posts = get(props, 'data.posts.edges')
  return (
    <Layout>
      <article className="prose lg:prose-xl mx-auto">
        <h2>Blog</h2>
        <BlogPosts posts={posts} />
      </article>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "blog" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`
