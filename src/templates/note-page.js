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
        title={siteTitle}
        siteDescription={siteDescription}
        siteTitle={`${note.frontmatter.title} | ${siteTitle}`}
      >
        <h1>{note.frontmatter.title}</h1>
        <h3>Table of contents</h3>
        <div dangerouslySetInnerHTML={{ __html: note.tableOfContents }} />
        <div dangerouslySetInnerHTML={{ __html: note.html }} />
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
      id
      html
      tableOfContents(maxDepth: 2)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
