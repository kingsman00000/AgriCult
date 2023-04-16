import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div className='flex justify-center items-center h-screen flex-col space-y-10'>
      <button className='btn-reg flex justify-center items-center rounded-full border-2 border-black bg-slate-400 w-80 h-12'>
        <div className='text-xl'><a href="#">Sign In as Seller</a></div>
      </button>
      <button className='btn-reg flex justify-center items-center rounded-full border-2 border-black bg-slate-400 w-80 h-12'>
      <div className='text-xl'><a href="#">Sign In as Buyer</a></div>
      </button>
    </div>
  )
}

export default Register
