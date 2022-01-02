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
    <div className="mt-8">
      <h1 className="text-4xl text-zinc-800">Álvaro Medina Ballester</h1>
      <p className="home-intro">{data.dataYaml.introduction}</p>
      <p className="home-intro">
        Currently, I work as an Engineering Manager at{' '}
        <a
          className="text-link"
          href="https://www.packlink.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Packlink
        </a>
        . Learn more{' '}
        <Link className="text-link" to="about/">
          about me
        </Link>
        .
      </p>
    </div>
  )
}

export default Bio
