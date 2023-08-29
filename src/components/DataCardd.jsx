import React from 'react'
import { AiFillClockCircle } from 'react-icons/ai';
const DataCardd = ({line1,line2}) => {
  return (
    <div className='flex w-80 text-black space-x-4'>
      <div >
      <AiFillClockCircle className='w-12 h-12'/>
       
              </div>
      <div className='flex flex-col'>
        <div className='text-2xl '> {line1}</div>
        <div className='text-xl text-slate-400'>{line2}</div>
      </div>
    </div>
  )
}

export default DataCardd
