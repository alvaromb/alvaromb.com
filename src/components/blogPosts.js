import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash.get'

const BlogPosts = ({ posts }) => (
  <ul className="list-none pl-0 lg:px-0">
    {posts.map(({ node }) => {
      const title = get(node, 'frontmatter.title') || node.fields.slug
      return (
        <li key={node.fields.slug} className="mx-0 px-0 lg:px-0 my-6 lg:my-10">
          <small className="text-zinc-400">
            {node.frontmatter.date} · {node.timeToRead} min read
          </small>
          <h2 className="mt-1 lg:mt-0">
            <Link className="text-link" to={node.fields.slug}>
              {title}
            </Link>
          </h2>
          <p>{node.excerpt}</p>
        </li>
      )
    })}
  </ul>
)

export default BlogPosts
