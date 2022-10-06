import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex justify-around py-2 shadow-md items-center text-2xl font-mono bg-white'>
      <span>
        Do App
        <img src='https://avatars.dicebear.com/api/initials/Do%20App.svg' className='h-10 inline animate-bounce'></img>
      </span>
      <span className='bg-green-500 p-1'>To-Do List</span>
    </div>
  )
}


