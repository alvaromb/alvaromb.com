import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const ShortBio = () => {
  const data = useStaticQuery(graphql`
    {
      dataYaml {
        introduction
      }
    }
  `)
  return (
    <small>
      {data.dataYaml.introduction} Learn more <Link to="about/">about me</Link>.
    </small>
  )
}

export default ShortBio
