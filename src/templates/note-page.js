import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash.get'

import Layout from '../components/layout'

class NotePageTemplate extends React.Component {
  render() {
    const note = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = note.excerpt
    return (
      <Layout
        location={this.props.location}
        siteDescription={siteDescription}
        siteTitle={`${note.frontmatter.title} | ${siteTitle}`}
      >
        <article className="prose lg:prose-lg">
          <h1>{note.frontmatter.title}</h1>
          <h3>Table of contents</h3>
        </article>
        <article
          className="prose lg:prose-lg"
          dangerouslySetInnerHTML={{ __html: note.tableOfContents }}
        />
        <article
          className="prose lg:prose-lg mt-11"
          dangerouslySetInnerHTML={{ __html: note.html }}
        />
      </Layout>
    )
  }
}

export default NotePageTemplate

export const pageQuery = graphql`
  query NoteBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents(maxDepth: 2)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
