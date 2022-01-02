import React from 'react'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'

class Layout extends React.Component {
  render() {
    const { children, siteDescription, siteTitle, footer } = this.props
    const title = siteTitle || 'Alvaro Medina Ballester personal site'

    return (
      <div>
        <Helmet
          htmlAttributes={{
            lang: 'en',
            title,
          }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={title}
        >
          <title>{title}</title>
        </Helmet>
        <Header />
        <div className="max-w-screen-md mb-12 mx-auto py-8 px-4">
          {children}
          <hr className="mt-16 mb-4 border-zinc-200" />
          {footer}
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
