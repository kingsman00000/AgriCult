import React from 'react'
import './imgUnit.css'
const ImgUnit = ({imgUrl}) => {
  return (
    <div className='h-20 w-20 '>
      <img className='max-w-20 imgUnit max-h-20 rounded-xl' src={imgUrl} alt/>
    </div>
  )
}

export default ImgUnit
