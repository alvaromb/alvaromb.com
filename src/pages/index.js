import React from 'react'
import { graphql } from 'gatsby'
import '@fontsource/alegreya'
import '@fontsource/alegreya-sans'
import get from 'lodash.get'

import Bio from '../components/Bio'
import Layout from '../components/layout'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout title={siteTitle} siteDescription={siteDescription}>
        <h1>Álvaro Medina Ballester</h1>
        <Bio />
      </Layout>
    )
  }
}

export default Index

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
