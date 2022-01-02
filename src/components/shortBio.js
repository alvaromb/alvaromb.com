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
    <div className="py-6">
      <small className="text-zinc-400">
        {data.dataYaml.introduction} Learn more <Link to="/about/">about me</Link>.
      </small>
    </div>
  )
}

export default ShortBio
