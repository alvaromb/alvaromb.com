import React from 'react'

class OpenSource extends React.PureComponent {
  render() {
    return (
      <>
        <h3>Open Source</h3>
        <p>
          I've been building and collaborating to open source software since the
          beginning of my engineering career. My current focus is on React and{' '}
          <a href="https://github.com/facebook/react-native/pulls?q=is%3Apr+author%3Aalvaromb">
            React Native
          </a>
          , having contributed to both technologies. I have also built OSS that
          has been{' '}
          <a href="https://github.com/APSL/react-native-keyboard-aware-scroll-view">
            downloaded more than 5 million times
          </a>{' '}
          and it's used by more than 25.000 projects.
        </p>
      </>
    )
  }
}

export default OpenSource
