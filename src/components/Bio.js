import React from 'react'

// Import typefaces
import 'typeface-libre-franklin'
import 'typeface-montserrat'

import IntroductionText from './IntroductionText'

class Bio extends React.Component {
  render() {
    return (
      <>
        <IntroductionText>
          Hi 👋! I’m Álvaro, a software engineer living in Palma, Spain. My
          current focus is on the intersection of mobile, front-end engineering,
          design and product development.
        </IntroductionText>
        <IntroductionText>
          I have worked for startups and big companies, helping them envision
          their mobile strategy. Currently, I serve as a Mobile Tech Lead at{' '}
          <a href="https://www.apsl.net/">APSL.net</a>. Learn more{' '}
          <a href="https://www.linkedin.com/in/alvaromb/">about me</a>.
        </IntroductionText>
      </>
    )
  }
}

export default Bio
