import React from 'react'

interface Props {
  inputs: {
    firstName: string
    lastName: string
    email: string
    phone: string
    city: string
    password: string
  }
  onInputsChange: any
  isSignIn: Boolean
}

const AuthModalInputs = ({ inputs, onInputsChange, isSignIn }: Props) => {
  return (
    <div>
      {isSignIn ? null : (
        <div className='flex justify-between my-3 text-sm '>
          <input
            placeholder='First Name'
            type='text'
            className='bg-gray-50 border rounded p-2 py-3 w-[49%]'
            value={inputs.firstName}
            name='firstName'
            onChange={onInputsChange}
          />
          <input
            placeholder='Last Name'
            type='text'
            className='bg-gray-50 border rounded p-2 py-3 w-[49%]'
            value={inputs.lastName}
            name='lastName'
            onChange={onInputsChange}
          />
        </div>
      )}
      <div className='flex justify-between my-3 text-sm '>
        <input
          placeholder='Email'
          type='text'
          className='w-full p-2 py-3 border rounded bg-gray-50'
          value={inputs.email}
          name='email'
          onChange={onInputsChange}
        />
      </div>
      {isSignIn ? null : (
        <div className='flex justify-between my-3 text-sm '>
          <input
            placeholder='Phone'
            type='text'
            className='bg-gray-50 border rounded p-2 py-3 w-[49%]'
            value={inputs.phone}
            name='phone'
            onChange={onInputsChange}
          />
          <input
            placeholder='City'
            type='text'
            className='bg-gray-50 border rounded p-2 py-3 w-[49%]'
            value={inputs.city}
            name='city'
            onChange={onInputsChange}
          />
        </div>
      )}
      <div className='flex justify-between my-3 text-sm '>
        <input
          placeholder='Password'
          type='password'
          className='w-full p-2 py-3 border rounded bg-gray-50'
          value={inputs.password}
          name='password'
          onChange={onInputsChange}
        />
      </div>
    </div>
  )
}

export default AuthModalInputs
