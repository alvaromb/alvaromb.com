import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash.get'

import ShortBio from '../components/shortBio'
import Layout from '../components/layout'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    console.log(post.frontmatter.tags)
    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        siteDescription={siteDescription}
        siteTitle={`${post.frontmatter.title} | ${siteTitle}`}
        footer={<ShortBio />}
      >
        <h1>{post.frontmatter.title}</h1>
        <p className="block text-gray-400 font-sans">
          {post.frontmatter.date} · {post.timeToRead} min read
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <small className="mt-6">Tags:</small>
        <ul className="list-none ml-0">
          {post.frontmatter.tags.map((tag) => (
            <li className="inline-block ml-0 mr-3 bg-green-900 p-1 rounded">
              <Link className="tag-link" activeClassName="tag-link" to={`/tags/${tag}/`}>
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      timeToRead
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`
