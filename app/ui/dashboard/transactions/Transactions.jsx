import React from 'react'
import Image from 'next/image'
const Transactions = () => {
  return (
    <div className='p-7 bg-[#222242] rounded-md mt-5'>
      <h2 className='text-lg mb-4 opacity-50'>Latest Transactions</h2>
     <table className='w-auto' >
      <thead>
        <tr className='flex flex-wrap  gap-36'>
          <td className=''>Name</td>
          <td className='ml-[21px]'>Status</td>
          <td className='ml-[0px]'>Date</td>
          <td className='ml-[21px]'>Amount</td>
        </tr>
      </thead>
      <tbody>
         <tr className='mt-2 flex flex-wrap gap-32'>
             <td className='flex mt-4 items-center'>
               <Image src="/noavatar.png"  width={30} height={30} className='rounded-full'/> <span className="ml-2 text-sm">Vikrant</span>
             </td>
             <td className='mt-4 text-sm'>Pending</td>
             <td className='mt-4 text-sm'>23/july/2024</td>
             <td className='mt-4 text-sm'>$ 3.5</td>
          </tr>

          <tr className='mt- flex flex-wrap gap-32'>
             <td className='flex mt-4 items-center'>
               <Image src="/noavatar.png"  width={30} height={30} className='rounded-full'/> <span className="ml-2 text-sm">Vikrant</span>
             </td>
             <td className='mt-4 text-sm'>Pending</td>
             <td className='mt-4 text-sm'>23/july/2024</td>
             <td className='mt-4 text-sm'>$ 3.5</td>
          </tr>

          <tr className=' flex gap-32 flex-wrap'>
             <td className='flex mt-4 items-center'>
               <Image src="/noavatar.png"  width={30} height={30} className='rounded-full'/> <span className="ml-2 text-sm">Vikrant</span>
             </td>
             <td className='mt-4 text-sm'>Pending</td>
             <td className='mt-4 text-sm'>23/july/2024</td>
             <td className='mt-4 text-sm'>$ 3.5</td>
          </tr>

        
      </tbody>
       
     </table>
    </div>
  )
}

export default Transactions
