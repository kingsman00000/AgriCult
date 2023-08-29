import React from 'react'

const Err = () => {
  return (
    <div className='flex flex-col items-center justify-center' style={{
      "height":"40em"
    }}>
      
      <div style={{
        "fontSize":"200px"
      }}>
        404
      </div>
      <div className='text-2xl'><span className='text-3xl'>Oops!</span> Page Not Found </div>
      <div style={{
        "width":"800px"
      }}>SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAVE BEEN REMOVED, NAME CHANGED OR IS TEMPORARILY UNAVAILABLE  </div>
      <a href='/'><button className='rounded-full hover:bg-blue-400 w-80 bg-blue-600 py-2 text-2xl font-bold'>Go to Home page</button></a>
    </div>
  )
}

export default Err
