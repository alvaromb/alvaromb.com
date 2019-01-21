import React from 'react'
import { Link } from 'gatsby'
import CenteredH1 from './CenteredH1'
import CenteredBottomSubtitle from './CenteredBottomSubtitle'
import { rhythm, scale } from '../utils/typography'

import backgroundImage from '../assets/Background.png'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div style={{ marginTop: 404 }}>
          <CenteredH1>{title}</CenteredH1>
          <CenteredBottomSubtitle>
            MOBILE APPS, DESIGN, UX & DEVELOPMENT
          </CenteredBottomSubtitle>
        </div>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: 588,
            padding: `0 ${rhythm(3 / 4)}`,
          }}
        >
          {header}
          {children}
        </div>
      </div>
    )
  }
}

export default Layout
