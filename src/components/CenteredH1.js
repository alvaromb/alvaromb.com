import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import Colors from '../utils/colors'

class CenteredH1 extends React.Component {
  render() {
    return (
      <h1
        style={{
          ...scale(0),
          marginBottom: rhythm(0.5),
          marginTop: 0,
          fontWeight: '800',
          fontSize: 36,
          color: Colors.body,
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
          {this.props.children}
        </Link>
      </h1>
    )
  }
}

export default CenteredH1
