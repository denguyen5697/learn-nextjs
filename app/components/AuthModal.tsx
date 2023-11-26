'use client'

import React, { ChangeEvent, useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import AuthModalInputs from './AuthModalInputs'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export default function AuthModal({ isSignIn }: { isSignIn: Boolean }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    password: ''
  })

  console.log({inputs})

  const handleInputsChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log({e})
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const renderContent = (signInContent: string, signUpContent: string) => {
    return isSignIn ? signInContent : signUpContent
  }
  return (
    <div>
      <button
        onClick={handleOpen}
        className={`${
          isSignIn
            ? 'text-red-600  bg-gray-50 border'
            : 'text-gray-800  bg-gray-50 border'
        } p-1 px-4 mr-3 rounded`}
      >
        {renderContent('Sign In', 'Sign Up')}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className='h-[500px]'>
            <div className='p-2 text-gray-600'>
              <div className='pb-2 mb-2 font-bold text-center uppercase border-p'></div>
              <p className='m-auto text-3xl text-center'>
                {renderContent('Sign In', 'Create Account')}
              </p>
            </div>
            <div className='m-auto text-gray-600'>
              <h2 className='text-2xl font-light text-center'>
                {renderContent('Log into your account', 'Create your account')}
              </h2>
              <AuthModalInputs
                inputs={inputs}
                onInputsChange={handleInputsChange}
                isSignIn={isSignIn}
              />
              <button className='w-full p-3 mb-5 text-sm text-white uppercase bg-red-600 rounded disabled:bg-gray-400'>
                {renderContent('Sign In', 'Create Account')}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
