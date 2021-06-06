import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash.get'

const BlogPosts = ({ posts }) => (
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
)

export default BlogPosts
