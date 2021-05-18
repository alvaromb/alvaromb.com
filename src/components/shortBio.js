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
    <div className="pt-5">
      <small>
        {data.dataYaml.introduction} Learn more <Link to="/about/">about me</Link>.
      </small>
    </div>
  )
}

export default ShortBio
