import React from 'react'
import { graphql } from 'gatsby'
import '@fontsource/alegreya-sans'
import get from 'lodash.get'

import Bio from '../components/bio'
import Layout from '../components/layout'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(this, 'props.data.site.siteMetadata.description')

    return (
      <Layout title={siteTitle} siteDescription={siteDescription}>
        <Bio />
      </Layout>
    )
  }
}

export default Index

export function Head() {
  const { siteDescription, siteTitle } = this.props
  const title = siteTitle || 'Alvaro Medina Ballester personal site'
  return (
    <>
      <htmlAttributes lang="en" title={title} />
      <meta
        charSet="utf-8"
        name="Alvaro Medina Ballester site"
        content={siteDescription}
      />
      <title>{title}</title>
    </>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
