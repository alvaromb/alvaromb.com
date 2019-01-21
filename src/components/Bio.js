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
          <a href="#">about me</a>.
        </IntroductionText>
      </>
    )
    // return (
    //   <div
    //     style={{
    //       display: 'flex',
    //       marginBottom: rhythm(2.5),
    //     }}
    //   >
    //     <img
    //       src={profilePic}
    //       alt={`Álvaro Medina Ballester`}
    //       style={{
    //         marginRight: rhythm(1 / 2),
    //         marginBottom: 0,
    //         width: rhythm(2),
    //         height: rhythm(2),
    //       }}
    //     />
    //     <p style={{ fontFamily: 'Libre Franklin, sans-serif' }}>
    //       Hi 👋! I'm <strong>Álvaro Medina Ballester</strong>, a mobile app
    //       developer living in Palma, Spain, focused on React, React Native,
    //       mobile design and user interfaces. Follow me on{' '}
    //       <a href="https://twitter.com/alvaromb">Twitter</a> or{' '}
    //       <a href="https://github.com/alvaromb">Github</a>.
    //     </p>
    //   </div>
    // )
  }
}

export default Bio
