import React from 'react'
import { Link } from 'gatsby'
import Logo from './logo'
import ListLink from './listLink'

const Header = () => (
  <header className="bg-emerald-900 border-t-2 border-t-amber-500">
    <div className="flex flex-row items-center max-w-3xl mx-auto">
      <Link className="no-underline" to={'/'}>
        <Logo />
      </Link>
      <div className="flex-auto">
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
