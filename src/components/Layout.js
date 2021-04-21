import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Logo from '../components/logo'
import ListLink from '../components/listLink'
import Footer from '../components/footer'

class Layout extends React.Component {
  render() {
    const { children, siteDescription, siteTitle, footer } = this.props

    return (
      <div className="max-w-screen-md my-12 mx-auto py-0 pv-4">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <div>
          <header className="mb-16 flex flex-row items-center">
            <Link className="no-underline" to={'/'}>
              <Logo />
            </Link>
            <div className="flex-auto">
              <ul className="list-none float-right">
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/projects/">Projects</ListLink>
                <ListLink to="/blog/">Blog</ListLink>
                <ListLink to="/notes/">Notes</ListLink>
              </ul>
            </div>
          </header>
          {children}
          <hr className="mt-8" />
          {footer}
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
