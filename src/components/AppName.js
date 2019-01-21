import React from 'react'
import Colors from '../utils/colors'

class AppName extends React.PureComponent {
  render() {
    return (
      <p
        style={{
          color: Colors.grey,
          fontSize: 15,
          fontWeight: '600',
          fontFamily: 'Montserrat',
          textAlign: 'center',
          width: 94,
        }}
      >
        {this.props.children}
      </p>
    )
  }
}

export default AppName
