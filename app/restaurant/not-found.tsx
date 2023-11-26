'use client'

import Image from 'next/image'
import errorMascot from '../../public/icons/error.png'

export default function Error({ error }: { error: Error }) {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen mt-20 mb-2 bg-gray-200'>
      <Image src={errorMascot} alt='error' className='w-56 mb-8' />
      <div className='bg-white rounded shadow px-9 py-14'>
        <h3 className='text-3xl font-bold'>Well, this is embarrassing</h3>
        <p className='font-bold text-reg'>{error.message}</p>
        <p className='mt-6 text-sm font-light'>Error Code: 400</p>
      </div>
    </div>
  )
}
