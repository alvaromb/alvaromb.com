import React from 'react'
import { rhythm, scale } from '../utils/typography'
import Colors from '../utils/colors'

class H3 extends React.Component {
  render() {
    return (
      <h3
        style={{
          ...scale(0),
          marginBottom: rhythm(0.5),
          marginTop: 0,
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '800',
          fontSize: 24,
          color: Colors.body,
          textAlign: 'left',
        }}
      >
        {this.props.children}
      </h3>
    )
  }
}

export default H3
