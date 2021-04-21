import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Project = (props) => {
  return (
    <div className="flex flex-col bg-white h-auto md:h-96 rounded-2xl ring-1 ring-primary ring-opacity-20 relative max-w-sm">
      <Link className="absolute self-center -top-12" to={props.slug}>
        <GatsbyImage
          className="w-28 h-28 mx-4 rounded-full ring-2 ring-primary ring-opacity-30"
          alt={props.title}
          image={getImage(props.icon)}
        />
      </Link>
      <div className="px-12 pb-12 pt-20 flex-1 justify-end font-sans text-md text-gray-500">
        <h3 className="font-medium">{props.title}</h3>
        <p className="font-sans text-base my-6 text-gray-600">{props.desc}</p>
        <Link className="uppercase tracking-widest text-sm" to={props.slug}>
          Learn more
        </Link>
      </div>
    </div>
  )
}

export default Project
