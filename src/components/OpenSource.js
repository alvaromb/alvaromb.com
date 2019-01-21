import React from 'react'
import H3 from './H3'
import IntroductionText from './IntroductionText'

class OpenSource extends React.PureComponent {
  render() {
    return (
      <>
        <H3>Open Source</H3>
        <IntroductionText>
          I've been building and collaborating to open source software since the
          beginning of my engineering career. My current focus is on React and{' '}
          <a href="https://github.com/facebook/react-native/pulls?q=is%3Apr+author%3Aalvaromb">
            React Native
          </a>
          , having contributed to both technologies. I have also built OSS that
          has been{' '}
          <a href="https://github.com/APSL/react-native-keyboard-aware-scroll-view">
            downloaded more than 3 million times
          </a>
          .
        </IntroductionText>
      </>
    )
  }
}

export default OpenSource
