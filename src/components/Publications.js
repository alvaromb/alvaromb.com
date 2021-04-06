import React from 'react'

class Publications extends React.PureComponent {
  render() {
    return (
      <>
        <h3>Publications</h3>
        <p>
          I have several publications in different types of media on Internet. I
          published two React Native courses on PacktPub:{' '}
          <a href="https://www.packtpub.com/application-development/building-your-application-react-native-video">
            Building your application with React Native
          </a>{' '}
          and{' '}
          <a href="https://www.packtpub.com/application-development/publishing-your-application-react-native-video">
            Publishing your application with React Native
          </a>
          . I'm also an active StackOverflow user, you can check my profile and
          reputation{' '}
          <a href="https://stackoverflow.com/users/1034126/amb">here</a>.
        </p>
      </>
    )
  }
}

export default Publications
