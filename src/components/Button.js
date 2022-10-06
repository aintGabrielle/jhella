import React from 'react'

export const Button = () => {
  return (
    <div>
        <div className='flex gap-5 '>
            <button className='bg-gray-300 sm:py-3 sm:px-5 py-2 px-3'>Add</button>
            <button className='bg-gray-300 sm:py-3 sm:px-5 py-2 px-3'>Delete</button>
            <button className='bg-gray-300 sm:py-3 sm:px-5 py-2 px-3'>Done Task</button>
        </div>
    </div>
  )
}
