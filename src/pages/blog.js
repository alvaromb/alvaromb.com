import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash.get'

import Layout from '../components/layout'

const Blog = (props) => {
  const posts = get(props, 'data.posts.edges')
  return (
    <Layout>
      <h2>Blog</h2>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <li key={node.fields.slug} style={{ marginBottom: 30 }}>
              <small>
                {node.frontmatter.date} · {node.timeToRead} min read
              </small>
              <h2 style={{ marginTop: 5 }}>
                <Link to={node.fields.slug}>{title}</Link>
              </h2>
              <p>{node.excerpt}</p>
            </li>
          )
        })}
      </ul>
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
