import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash.get'

import Layout from '../components/layout'

const Tags = (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const posts = get(props, 'data.posts.edges')
  const tag = get(props, 'pageContext.tag')

  return (
    <Layout
      location={props.location}
      title={siteTitle}
      siteDescription={`Tag`}
      siteTitle={`Tag: tag: ${tag} | ${siteTitle}`}
    >
      <h2>Tag: {tag}</h2>
      <ul className="list-none">
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <li key={node.fields.slug} className="ml-0 my-6">
              <small>
                {node.frontmatter.date} · {node.timeToRead} min read
              </small>
              <h2 className="mt-1">
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
