import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Logo from '../components/logo'
import ListLink from '../components/listLink'
import Footer from '../components/footer'
import Colors from '../utils/colors'

class Layout extends React.Component {
  render() {
    const { children, siteDescription, siteTitle, footer } = this.props

    return (
      <div class="max-w-screen-md my-12 mx-auto py-0 pv-4">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <div>
          <header class="mb-7 flex flex-row items-center">
            <Link className="no-underline" to={'/'}>
              <Logo />
            </Link>
            <div class="flex-auto">
              <ul class="list-none float-right">
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/projects/">Projects</ListLink>
                <ListLink to="/blog/">Blog</ListLink>
                <ListLink to="/notes/">Notes</ListLink>
              </ul>
            </div>
          </header>
          {children}
          <hr />
          {footer}
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
