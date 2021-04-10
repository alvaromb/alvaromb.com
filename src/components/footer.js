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
    <div class="mt-6">
      <div>
        <ul class="list-none ml-0">
          {data.allFooterYaml.nodes.map((service, i) => (
            <li key={`link-${i}`} class="mr-4 inline-block">
              <a
                class="text-xl"
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
      <div class="mt-4">
        <span>&copy; 2021 Álvaro.</span>
      </div>
    </div>
  )
}

export default Footer
