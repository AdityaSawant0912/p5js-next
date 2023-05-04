import React from 'react'
import HomeNav from '@/components/navbar/home.nav'
const HomeLayout = ({ children }) => {
  
  return (
    <>
      <div className='w-full lg:px-[25%] md:px-[20%] px-[5%] flex flex-col pt-3'>
      <HomeNav />
      {children}
    </div>
    </>
  )
}

export default HomeLayout