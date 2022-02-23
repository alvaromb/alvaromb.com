import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash.get'

import ShortBio from '../components/shortBio'
import Layout from '../components/layout'

class ProjectTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt

    return (
      <Layout
        location={this.props.location}
        siteDescription={siteDescription}
        siteTitle={`${post.frontmatter.title} | ${siteTitle}`}
        footer={<ShortBio />}
      >
        <article className="prose lg:prose-xl mx-auto">
          <h1 className="mb-11">{post.frontmatter.title}</h1>
        </article>
        <article
          className="prose lg:prose-xl mx-auto"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
