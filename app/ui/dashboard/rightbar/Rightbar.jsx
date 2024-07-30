import React from 'react'

const Rightbar = () => {
  return (
    <div className='w-full bg-hero-pattern opacity-60'>
    
      <div className=' opacity-1 h-auto p-3 rounded-sm'>
         <p className='text-md font-bold'>Available Now</p>
         <p className='mt-7 text-lg font-bold'>How to use the new version of the admin dashboard</p>
         <p className='mt-5 text-xs opacity-45  font-medium'>Takes $ minutes to learn</p>
         <p className='mt-5 text-sm opacity-45 font-semi-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius ipsam incidunt, doloremque non, dolor perspiciatis autem officia maxime veniam officiis ad possimus doloribus cumque quam nemo laboriosam magni vitae.</p>
         <button className= 'my-3 bg-indigo-700 p-2 text-sm rounded-sm '>Watch</button>
      </div>
    </div>
  )
}

export default Rightbar
