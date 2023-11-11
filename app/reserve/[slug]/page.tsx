import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
const ReservePage = () => {
  return (
    <>
      {/* NAVBAR END */}
      <div className='h-screen border-t'>
        <div className='w-3/5 m-auto text-black py-9'>
          {/* HEADER */}
          <Header />
          {/* HEADER */} {/* FORM */}
          <Form />
        </div>
      </div>
    </>
  )
}

export default ReservePage
