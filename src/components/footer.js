import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
    <div>
      <div>
        <ul className="list-none ml-0">
          {data.allFooterYaml.nodes.map((service, i) => (
            <li key={`link-${i}`} className="mr-4 inline-block">
              <a
                className="text-xl"
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {service.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <span>&copy; 2021 Álvaro.</span>
      </div>
    </div>
  )
}

export default Footer
