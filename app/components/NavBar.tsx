'use client'

import React, { useContext } from 'react'
import Link from 'next/link'
import AuthModal from './AuthModal'
import { AuthenticationContext } from '../context/AuthContext'
import useAuth from '../../hooks/useAuth'

const NavBar = () => {
  const { data, loading } = useContext(AuthenticationContext)
  const { logOut } = useAuth()
  return (
    <nav className='flex justify-between p-2 bg-white'>
      <Link href='/' className='text-2xl font-bold text-gray-700'>
        {' '}
        OpenTable{' '}
      </Link>
      <div>
        {loading ? null : (
          <div className='flex'>
            {data ? (
              <button
                onClick={logOut}
                className='px-8 py-2 mr-2 text-white bg-blue-400 border rounded'
              >
                {data.firstName} {data.lastName} (Log out)
              </button>
            ) : (
              <>
                <AuthModal isSignIn={true} />
                <AuthModal isSignIn={false} />
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
