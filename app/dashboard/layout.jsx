import React from 'react'
import Navbar from '../ui/dashboard/navbar/Navbar'
import Sidebar from '../ui/dashboard/sidebar/Sidebar'

const Layout = ({children}) => {
  return (
    <div className='flex bg-[#141436]  w-full'>
      {/* Sidebar section */}
      <div className='flex-none w-[20%] bg-[#222242] text-white mb-20 h-auto'>
        <Sidebar />
      </div>

      {/* Navbar and main content section */}
      <div className='flex-1 flex flex-col text-white w-[80%] '>
        <Navbar />

        {/* Main content area */}
        <div className='flex-1 h-screen'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
