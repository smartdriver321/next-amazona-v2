import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header>
      <nav>
        <div className='navbar justify-between bg-base-300'>
          <Link className='btn btn-ghost text-lg' href='/'>
            Next Amazona
          </Link>
          <ul className='flex'>
            <li>
              <Link className='btn btn-ghost rounded-btn' href='/cart'>
                Cart
              </Link>
            </li>
            <li>
              <Link className='btn btn-ghost rounded-btn' href='/signin'>
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
