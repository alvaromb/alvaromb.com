import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Project = (props) => {
  return (
    <div className="flex flex-col bg-white h-auto md:h-96 rounded-2xl ring-1 ring-zinc-300 relative max-w-sm shadow-md">
      <Link className="absolute self-center -top-12" to={props.slug}>
        <GatsbyImage
          className="w-28 h-28 mx-4 rounded-full ring-2 ring-emerald-700 shadow-lg"
          imgClassName="rounded-full"
          alt={props.title}
          image={getImage(props.icon)}
        />
      </Link>
      <div className="px-12 pb-12 pt-20 flex-1 justify-end font-sans text-md text-zinc-500">
        <h3 className="font-bold text-emerald-800">{props.title}</h3>
        <p className="font-sans text-base my-6 text-zinc-600">{props.desc}</p>
        <Link
          className="uppercase tracking-widest text-sm text-amber-600"
          to={props.slug}
        >
          Learn more
        </Link>
      </div>
    </div>
  )
}

export default Project
