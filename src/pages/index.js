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
