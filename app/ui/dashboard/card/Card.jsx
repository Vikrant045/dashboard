import React from 'react'
import {
  MdDashboard,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
const Cart = () => {
  return (
    <div className='flex rounded w-72 p-3 bg-[#222242]'>
       <div className=''>< MdDashboard className='mt-0.5'/></div>
       <div className='flex flex-col ml-2 gap-3'>
        <p className='text-sm'>Total Users</p>
        <p>3500</p>
        <p className='text-xs'><span className='text-green-700'>112%</span> more than previous week</p>
       </div>
    </div>
  )
}

export default Cart
