import React from 'react'

const WeatherCard = ({property,value,key}) => {
  return (
    <div>
      {
        property == "temperature" ? 
        <div className='rounded-full bg-blue-100 flex flex-col justify-center items-center ' style={{
        "width":"17em",
        "height":"17em",
        
        }}>
            <div className='text-9xl flex'>
               <span className='flex items-start'> {value}<span className='text-3xl'>o</span></span><span>c</span>
            </div>
            <div className='text-4xl'>{property}</div>
        </div> :
         <div className=' bg-blue-100 my-4 rounded-full flex flex-col justify-center items-center ' style={{
            "width":"45em",
            "height":"8em",
            
            
            }}>
                <div className='text-6xl flex'>
                   {value}
                  
                   {
                    key == 1 ? <> <span className='flex items-start'> <span className='text-xl'>o</span></span><span>c</span></> : <></>
                    
                   }
                   
                </div>
                <div className='text-4xl'>{property}</div>
            </div>
      }


      
    </div>
  )
}

export default WeatherCard
