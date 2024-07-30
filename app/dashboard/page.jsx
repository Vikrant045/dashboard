import React from 'react'
import Card from '../ui/dashboard/card/Card'
import Chart from '../ui/dashboard/chart/Chart'

import Transactions from '../ui/dashboard/transactions/Transactions'
import Rightbar from '../ui/dashboard/rightbar/Rightbar'
const Page = () => {
  return (
    <div className='flex flex-row   px-[16px] w-full h-full'>
      <div className=' flex flex-col mr-2 w-[70%]'>
        <div className='flex gap-5'>
          <Card/>
          <Card/>
          <Card/>
        </div>
          <Transactions/>
          <Chart/>
          <Transactions/>
      </div>
       
        <div className=' w-[30%] mx-2'>
        <Rightbar/>
        </div>
        
    </div>
  )
}

export default Page
