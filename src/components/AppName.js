import React from 'react'
import Colors from '../utils/colors'
import { rhythm } from '../utils/typography'

class AppName extends React.PureComponent {
  render() {
    return (
      <span
        style={{
          paddingBottom: rhythm(0.2),
        }}
      >
        {this.props.children}
      </span>
    )
  }
}

export default AppName
