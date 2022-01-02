import React from 'react'
import { Link } from 'gatsby'

const ListLink = (props) => (
  <li className="inline-block mr-4">
    <Link className="text-2xl text-amber-500 hover:underline" to={props.to}>
      {props.children}
    </Link>
  </li>
)

export default ListLink
