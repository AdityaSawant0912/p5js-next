import React from 'react'
import Link from 'next/link'
const HomeNav = () => {
  return (
    <div className='bg-white bg-opacity-5 flex flex-row h-[60px] items-center rounded-lg bg-nav-bg'>
      <div className='w-1/2 bg-green-300 ml-5 bg-green-30 h-full items-center'>
        <Link href={'/#'}>Aditya Sawant</Link>
      </div>
      <div className='w-1/2 flex flex-row justify-end'>
        {/* <Link href={'/#'}>Aditya Sawant</Link> */}
        <div className='w-[20%] bg-red-300 mr-5 text-center'>
          Item 1
        </div>
        <div className='w-[20%] bg-red-300 mr-5 text-center'>
          Item 1
        </div>
        <div className='w-[20%] bg-red-300 mr-5 text-center'>
          Item 1
        </div>
      </div>
      
    </div>
  )
}

export default HomeNav