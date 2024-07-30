"use client"
import React from 'react'
import Image from 'next/image';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuItem from './MenuItem';

const menuItems= [
                 {
                  name: 'Pages',
                  list:[
                    {name: 'Dashboard', icon: <MdDashboard />,path:'/dashboard'},
                    {name: 'Users', icon: <MdSupervisedUserCircle />,path:'/dashboard/users'},
                    {name: 'Products', icon: <MdShoppingBag />,path:'/dashboard/products'},
                    {name: 'Transactions', icon: <MdAttachMoney />,path:'/dashboard/transactions'},
                  ]
                 },
                 {
                  name: 'Analytics',
                  list:[
                    {name: 'Revenue', icon: <MdAnalytics />,path:'dashboard/revenue'},
                    {name: 'Reports', icon: <MdWork />,path:'dashboard/reports'},
                    {name:'Teams',icon: <MdWork />,path:'dashboard/teams'}
                  ]
                 },
                 {
                  name: 'User',
                  list:[
                    {name: 'Profile', icon: <MdPeople />,path:'dashboard/profile'},
                    {name: 'Settings', icon: <MdOutlineSettings />,path:'dashboard/settings'},,
                    {name: 'Logout', icon: <MdHelpCenter />,path:'dashboard/logout'},
                  ]
                 }
                  
                 ]
const Sidebar = () => {
  return (
    <div className='p-4 '>
      
      <div className='flex  items-center mt-3 mb-5'>
        <Image
            src="/noavatar.png"
            height={40}
            width={40}
            className='rounded-full'
        />
        <div className='flex flex-col ml-6'>
          <span className='text-md'>Name</span>
          <span className='text-xs'>Admini</span>
        </div>
      </div>
      <div>
       {                
        menuItems.map((item)=>(
          <div key={item.name} >
              <span className='text-sm'>{item.name}</span>
              {
                item.list.map((item)=>(
                  <MenuItem key={item.name} item={item} />
                ))
              }
          </div>
        )
         )
       }
      </div>
    </div>
  )
}

export default Sidebar
