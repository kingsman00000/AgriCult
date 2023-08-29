import React from 'react'


const Offer = ({oName,oDesc,oNum}) => {
  return (
    <div className= 'p-2  rounded-xl border-2 border-black '> 
      <div className='font-bold w-40'>{oName} </div>
      <div className='text-sm'>{oDesc}</div>
      <a href="#"><div className="text-blue-500 flex items-center ">{oNum} offers <i class="fa-solid fa-caret-down ml-1"></i></div></a>
    </div>
  )
}

export default Offer
