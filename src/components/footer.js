import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { rhythm } from '../utils/typography'

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allFooterYaml {
        nodes {
          link
          name
        }
      }
    }
  `)
  return (
    <>
      <div>
        <ul
          style={{
            listStyle: `none`,
            margin: 0,
          }}
        >
          {data.allFooterYaml.nodes.map((service, i) => (
            <li
              key={`link-${i}`}
              style={{
                display: `inline-block`,
                marginRight: `1rem`,
              }}
            >
              <a href={service.link} target="_blank" rel="noopener noreferrer">
                {service.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ marginTop: rhythm(1) }}>
        <span>&copy; 2021 Álvaro.</span>
      </div>
    </>
  )
}

export default Footer
