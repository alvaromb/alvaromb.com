import React from 'react'
import { Link } from 'gatsby'

const NoteItem = ({ title, field, slug }) => (
  <li className="hover:bg-green-900 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200 bg-white ml-0">
    <Link
      to={slug}
      className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center note-item-link"
      activeClassName="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center note-item-link"
    >
      <div>
        <span class="group-hover:text-white leading-6 font-medium text-black font-sans">
          {title}
        </span>
      </div>
      <div>
        <span class="group-hover:text-green-200 text-gray-400 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4 font-sans">
          {field}
        </span>
      </div>
    </Link>
  </li>
)

export default NoteItem
