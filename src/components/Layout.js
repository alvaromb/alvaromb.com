import React from 'react'
import { Link } from 'gatsby'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div>
          <h1>{title}</h1>
          <div>ENGINEERING, MANAGEMENT, PRODUCT & MOBILE</div>
        </div>
      )
    } else {
      header = (
        <div>
          <h3>
            <Link
              sx={{
                color: 'inherit',
                '&.active': {
                  color: 'primary',
                },
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
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: 700,
          paddingBottom: 80,
        }}
      >
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
