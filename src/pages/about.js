import React from 'react'
import Layout from '../components/layout'

const About = () => {
  return (
    <Layout>
      <h2>About</h2>
      <p>
        I'm a software engineer
        <a href="#fn-uib">
          <sup>1</sup>
        </a>{' '}
        and a manager
        <a href="#fn-pdd">
          <sup>2</sup>
        </a>{' '}
        living in Palma, Spain. I've been working on digital products for the
        past 10 years, mainly on mobile apps for both start-ups and big
        companies. I started developing iPhone apps for iOS 5 and I've been
        experimenting with different technologies in the mobile realm, from
        native environments to hybrid solutions.
      </p>

      <p>
        In 2017 I was in charge of the mobile development team at APSL, managing
        customers, onboarding people and leading the tech for mobile apps. My
        experience managing engineers and projects drove my interest to switch
        from individual contributor to team lead. Since 2019 I'm the general
        manager of a public company called Fundació BIT, which executes software
        for the public sector, from hospitals to e-admin.
      </p>

      <p>
        Before 2017 I had the luck of being in charge of the mobile team of an
        start-up incubator named Mola.com, which gave me a lot of insight and
        experience about building and scaling digital products with a lean
        approach.
      </p>

      <ol>
        <li id="fn-uib">
          BSc., MSc. from Universitat de les Illes Balears (Spain).
        </li>
        <li id="fn-pdd">
          PDD, Program for Management Development from IESE Business School
          (Spain).
        </li>
      </ol>
    </Layout>
  )
}

export default About
