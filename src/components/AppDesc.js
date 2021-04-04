import React from 'react'
import Colors from '../utils/colors'

class AppDesc extends React.PureComponent {
  render() {
    return (
      <span
        style={{
          color: Colors.grey,
          fontSize: 15,
          fontWeight: '400',
        }}
      >
        {this.props.children}
      </span>
    )
  }
}

export default AppDesc
