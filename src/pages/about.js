import React from 'react'
import Layout from '../components/layout'

const About = () => {
  return (
    <Layout>
      <h2>About</h2>
      I'm a software engineer
      <a href="#fn-uib">
        <sup>1</sup>
      </a>{' '}
      and a manager
      <a href="#fn-pdd">
        <sup>2</sup>
      </a>{' '}
      living in Palma, Spain.
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
