import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash.get'

import Layout from '../components/layout'

const Notes = (props) => {
  const title = 'Book notes | Álvaro Medina Ballester'
  const notes = get(props, 'data.notes.edges')
  console.log(notes)
  return (
    <Layout location={props.location} title={title} siteTitle={title}>
      <h2>Notes</h2>
      <p>
        Here you can find my book notes. I follow a note taking system to{' '}
        <a href="https://fs.blog/reading/" target="_blank" rel="noopener noreferrer">
          read better
        </a>{' '}
        and learn from the books I want to dive deep on.
      </p>
      <ul>
        {notes.map(({ node }) => (
          <li>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>.
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Notes

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    notes: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: DESC }
      filter: { frontmatter: { category: { eq: "notes" } } }
    ) {
      edges {
        node {
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
`
