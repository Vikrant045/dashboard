import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const MenuItem = ({item}) => {
    const pathName = usePathname() 
  return (
    <Link className={`flex items-center py-3  pl-2 my-2 ml-1 rounded hover:bg-[#32324e] ${item.path==pathName?'bg-[#32324e]':null}`} href={item.path}>
      {item.icon}
      <span className='ml-2 text-xs'>{item.name}</span>
    </Link>
  )
}

export default MenuItem
