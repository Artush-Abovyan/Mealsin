import React from 'react'

export function Search({search}) {
  return (
    <div className='text-center p-4'>
          <input 
            className=' w-2/4 border-b-2 border-red-300 outline-0 text-2xl text-red-400' 
            type="text" 
            placeholder='Search Here...' 
            onChange={(e)=> search(e.target.value)}
          />
    </div>
  )
}
