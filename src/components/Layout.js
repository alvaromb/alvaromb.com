import React from 'react'
import { Link } from 'gatsby'
import CenteredH1 from './CenteredH1'
import CenteredBottomSubtitle from './CenteredBottomSubtitle'
import { rhythm, scale } from '../utils/typography'

import bgLine from '../assets/bgline.png'
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
        <div style={{ marginTop: 404 }}>
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
              }}
              to={'/'}
            >
              {title}
            </Link>
          </h3>
        </div>
      )
    }
    return (
      <div
        style={{
          backgroundImage: `url(${bgLine})`,
          backgroundPosition: 'center top',
          backgroundRepeat: 'repeat-x',
          overflow: 'hidden',
        }}
      >
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
              paddingBottom: 80,
            }}
          >
            {header}
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
