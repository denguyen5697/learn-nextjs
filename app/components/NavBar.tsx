import React from 'react'
import Link from 'next/link'
import AuthModal from './AuthModal'

const NavBar = () => {
  return (
    <nav className='flex justify-between p-2 bg-white'>
      <Link href='/' className='text-2xl font-bold text-gray-700'>
        {' '}
        OpenTable{' '}
      </Link>
      <div>
        <div className='flex'>
          <AuthModal isSignIn={true} />
          <AuthModal isSignIn={false} />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
