import React from 'react'
import Colors from '../utils/colors'

class IntroductionText extends React.PureComponent {
  render() {
    return (
      <p
        style={{
          color: Colors.body,
          fontSize: 20,
          fontFamily: 'Libre Franklin',
        }}
      >
        {this.props.children}
      </p>
    )
  }
}

export default IntroductionText
