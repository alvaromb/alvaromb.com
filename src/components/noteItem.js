import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const NoteItem = ({ title, field, slug, cover }) => (
  <li className="hover:bg-amber-100 hover:border-amber-600 hover:shadow-lg group block rounded-lg p-4 border border-zinc-200 bg-white ml-0">
    <Link
      to={slug}
      className="flex flex-row  grid-cols-2 grid-rows-2 items-center note-item-link relative"
      activeClassName="flex flex-row   grid-cols-2 grid-rows-2 items-center note-item-link relative"
    >
      <div class="flex-1 self-start">
        <div>
          <span class="group-hover:text-amber-800 leading-6 font-medium text-black font-sans">
            {title}
          </span>
        </div>
        <div>
          <span class="group-hover:text-amber-600 text-zinc-500 text-sm font-medium mb-4 font-sans">
            {field}
          </span>
        </div>
      </div>
      <GatsbyImage image={getImage(cover)} alt={title} className="float-right" />
    </Link>
  </li>
)

export default NoteItem
