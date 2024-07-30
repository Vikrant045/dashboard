"use client"
import { usePathname } from 'next/navigation';
import React from 'react'
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className='bg-[#222242] p-3 m-4 flex items-center justify-between rounded-md '>

      <div>
        {pathname.split("/").pop()}
      </div>

      <div className='flex items-center mr-3'>
        <div className='flex items-center gap-2.5 bg-[#2e374a] p-1 rounded-lg'>
          <MdSearch className='ml-1'/>
          <input type='text' placeholder='Search...' className='bg-transparent border-none focus:outline-none' />
        </div>

        <div className='flex gap-3 ml-3'>
          <MdNotifications size={20}/>
          <MdOutlineChat size={20}/>
          <MdPublic size={20}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
