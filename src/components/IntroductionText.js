import React from 'react'
import Colors from '../utils/colors'

class IntroductionText extends React.PureComponent {
  render() {
    return (
      <p
        style={{
          fontSize: 18,
        }}
      >
        {this.props.children}
      </p>
    )
  }
}

export default IntroductionText
