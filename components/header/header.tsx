import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

export default function Header() {
  return (
    <header>
      <nav>
        <div className='navbar justify-between bg-base-300'>
          <Link className='btn btn-ghost text-lg' href='/'>
            Next Amazona V2
          </Link>
          <Menu />
        </div>
      </nav>
    </header>
  )
}
