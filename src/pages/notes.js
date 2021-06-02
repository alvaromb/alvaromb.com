import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash.get'

import Layout from '../components/layout'
import NoteItem from '../components/noteItem'

const Notes = (props) => {
  const title = 'Book notes | Álvaro Medina Ballester'
  const notes = get(props, 'data.notes.edges')

  return (
    <Layout
      location={props.location}
      title={title}
      siteTitle={title}
      siteDescription="A collection of booknotes to help organize knowledge. Mostly about tech, management and start-ups."
    >
      <h2>Notes</h2>
      <p>
        Here you can find my book notes. I follow a note taking system to{' '}
        <a href="https://fs.blog/reading/" target="_blank" rel="noopener noreferrer">
          read better
        </a>{' '}
        and learn from the books I want to dive deep on.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {notes.map(({ node }) => (
          <NoteItem
            title={node.frontmatter.title}
            field={node.frontmatter.field}
            slug={node.fields.slug}
            cover={node.frontmatter.cover}
          />
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
            field
            cover {
              childImageSharp {
                gatsbyImageData(width: 70, placeholder: BLURRED)
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
