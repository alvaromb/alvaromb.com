import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Logo from '../components/logo'
import ListLink from '../components/listLink'
import Footer from '../components/footer'
import Colors from '../utils/colors'

class Layout extends React.Component {
  render() {
    const { children, siteDescription, siteTitle } = this.props

    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
          bodyAttributes={{ style: `background-color: ${Colors.background}` }}
        />
        <div
          style={{
            margin: '3rem auto',
            maxWidth: 800,
            padding: `0 1rem`,
          }}
        >
          <header
            style={{
              marginBottom: `1.5rem`,
            }}
          >
            <div style={{ display: 'inline' }}>
              <Link
                style={{ color: Colors.primary, textDecoration: 'none' }}
                to={'/'}
              >
                <Logo />
              </Link>
            </div>
            <ul
              style={{
                listStyle: `none`,
                float: `right`,
              }}
            >
              <ListLink to="/about/">About</ListLink>
              <ListLink to="/projects/">Projects</ListLink>
              <ListLink to="/blog/">Blog</ListLink>
              <ListLink to="/notes/">Notes</ListLink>
            </ul>
          </header>
          {children}
          <hr />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
