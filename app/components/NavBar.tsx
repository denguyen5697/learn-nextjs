import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='flex justify-between p-2 bg-white'>
      <Link href='/' className='text-2xl font-bold text-gray-700'>
        {' '}
        OpenTable{' '}
      </Link>
      <div>
        <div className='flex'>
          <button className='p-1 px-4 mr-3 text-white bg-blue-400 border rounded'>
            Sign in
          </button>
          <button className='p-1 px-4 text-black border rounded'>
            Sign up
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
