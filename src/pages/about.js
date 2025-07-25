import React from 'react'
import Layout from '../components/layout'

const About = () => {
  return (
    <Layout>
      <article className="prose lg:prose-xl mx-auto">
        <h2>About</h2>
        <p>
          I'm a software engineer
          <a href="#fn-uib">
            <sup>1</sup>
          </a>{' '}
          and a manager
          <a href="#fn-pdd">
            <sup>2</sup>
          </a>. I've been working on digital products for the past 10
          years, mainly on mobile apps for both start-ups and big companies. I started
          developing iPhone apps for iOS 5 and I've been experimenting with different
          technologies in the mobile realm, from native environments to hybrid solutions.
          Currently, I work as an Engineering Manager at Packlink (part of Auctane),
          driving cross functional teams. I've been responsible for building the SaaS model of the
          PRO product.
        </p>

        <p>
          Prior to that, in 2017 I was in charge of the mobile development team at APSL,
          managing customers, onboarding people and leading the tech for mobile apps. My
          experience managing engineers and projects drove my interest to switch from
          individual contributor to team lead. On 2019, I fully switched into management,
          taking the role of general manager of a government company called Fundació BIT,
          which executes software for the public sector, from hospitals to e-admin.
        </p>

        <p>
          Before 2017 I had the luck of being in charge of the mobile team of an start-up
          incubator named Mola.com, which gave me a lot of insight and experience about
          building and scaling digital products with a lean approach. During my career as
          individual contributor and manager I've been able to contribute to several open
          source projects like Facebook's{' '}
          <a
            href="https://github.com/facebook/react-native/pulls?q=is%3Apr+author%3Aalvaromb+is%3Aclosed"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-native
          </a>
          ,{' '}
          <a
            href="https://github.com/gcanti/tcomb-form-native"
            target="_blank"
            rel="noopener noreferrer"
          >
            tcomb
          </a>
          , among others, and I've also created popular components like{' '}
          <a
            href="https://github.com/APSL/react-native-keyboard-aware-scroll-view"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-native-keyboard-aware-scroll-view
          </a>{' '}
          or{' '}
          <a
            href="https://github.com/APSL/react-native-version-number"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-native-version-number
          </a>
          . I've also given{' '}
          <a
            href="https://github.com/NSSpain/NSSpain-Summaries/blob/master/2016.md#%EF%B8%8F-talks"
            target="_blank"
            rel="noopener noreferrer"
          >
            talks
          </a>{' '}
          and{' '}
          <a
            href="https://www.packtpub.com/application-development/building-your-application-react-native-video"
            target="_blank"
            rel="noopener noreferrer"
          >
            published
          </a>{' '}
          <a
            href="https://www.packtpub.com/application-development/publishing-your-application-react-native-video"
            target="_blank"
            rel="noopener noreferrer"
          >
            courses
          </a>{' '}
          on React Native development.
        </p>

        <p>
          Contribute to the community, create and foster good environments to help people
          grow, explore how different technologies can have positive impact on businesses
          and projects is my passion.
        </p>

        <ol className="pt-4">
          <li id="fn-uib" className="pl-3">
            BSc., MSc. from Universitat de les Illes Balears (Spain).
          </li>
          <li id="fn-pdd" className="pl-3">
            PDD, Program for Management Development from IESE Business School (Spain).
          </li>
        </ol>
      </article>
    </Layout>
  )
}

export default About
