import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const NoteItem = ({ title, field, slug, cover }) => (
  <li className="hover:bg-green-900 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200 bg-white ml-0">
    <Link
      to={slug}
      className="flex flex-row  grid-cols-2 grid-rows-2 items-center note-item-link relative"
      activeClassName="flex flex-row   grid-cols-2 grid-rows-2 items-center note-item-link relative"
    >
      <div class="flex-1 self-start">
        <div>
          <span class="group-hover:text-white leading-6 font-medium text-black font-sans">
            {title}
          </span>
        </div>
        <div>
          <span class="group-hover:text-green-200 text-gray-500 text-sm font-medium mb-4 font-sans">
            {field}
          </span>
        </div>
      </div>
      <GatsbyImage image={getImage(cover)} alt={title} className="float-right" />
    </Link>
  </li>
)

export default NoteItem
