import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import Colors from '../utils/colors'

class CenteredBottomSubtitle extends React.Component {
  render() {
    return (
      <div
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          fontSize: 16,
          color: Colors.primary,
          textAlign: 'center',
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
          {this.props.children.toUpperCase()}
        </Link>
      </div>
    )
  }
}

export default CenteredBottomSubtitle
