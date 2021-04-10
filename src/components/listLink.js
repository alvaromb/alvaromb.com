import React from 'react'
import { Link } from 'gatsby'

const ListLink = (props) => (
  <li class="inline-block mr-4">
    <Link className="text-2xl" to={props.to}>
      {props.children}
    </Link>
  </li>
)

export default ListLink
