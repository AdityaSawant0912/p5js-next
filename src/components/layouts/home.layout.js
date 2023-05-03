import React from 'react'
import HomeNav from '@/components/navbars/home.nav'
const HomeLayout = ({ children }) => {
  return (
    <>
    <div className='w-full md:px-[20%] px-[5%] flex flex-col pt-3'>
      <HomeNav />
      {children}
    </div>
    </>
  )
}

export default HomeLayout