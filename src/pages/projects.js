import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash.get'

import Layout from '../components/layout'
import Project from '../components/project'

const Projects = (props) => {
  console.log(props)
  const apps = get(props, 'data.apps.edges')
  return (
    <Layout>
      <article className="prose lg:prose-xl">
        <h2>Projects</h2>
      </article>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 mt-20">
        {apps.map((app) => (
          <Project
            key={app.node.frontmatter.title}
            title={app.node.frontmatter.title}
            desc={app.node.excerpt}
            icon={app.node.frontmatter.icon}
            slug={app.node.fields.slug}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query {
    apps: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "app" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            icon {
              childImageSharp {
                gatsbyImageData(width: 224)
              }
            }
          }
          excerpt(pruneLength: 220)
        }
      }
    }
  }
`
