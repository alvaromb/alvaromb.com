import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Bio = () => {
  const data = useStaticQuery(graphql`
    {
      dataYaml {
        introduction
      }
    }
  `)
  return (
    <>
      <p class="home-intro">{data.dataYaml.introduction}</p>
      <p class="home-intro">
        I have worked for startups and big companies, helping them envision
        their mobile strategy and leading technical teams. Currently, I serve as
        General Manager at{' '}
        <a
          href="http://www.fundaciobit.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fundació BIT
        </a>
        . Learn more <Link to="about/">about me</Link>.
      </p>
    </>
  )
}

export default Bio
