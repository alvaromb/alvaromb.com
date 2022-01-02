import React from 'react'
import { Link } from 'gatsby'
import Logo from './logo'
import ListLink from './listLink'

const Header = () => (
  <header className="flex items-center h-20 bg-emerald-900 border-t-2 border-t-amber-500">
    <div className="w-full mx-auto">
      <div className="flex items-center px-4">
        <Link className="grow no-underline" to={'/'}>
          <Logo />
        </Link>
        <ul className="list-none float-right">
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/projects/">Projects</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
          <ListLink to="/notes/">Notes</ListLink>
        </ul>
      </div>
    </div>
  </header>
)

export default Header
