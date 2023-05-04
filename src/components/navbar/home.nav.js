import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
const HomeNav = () => {

  const [navItems, setNavItems] = useState([]);
  useEffect(() => {
    async function load() {
      let res = await fetch(`${process.env.NEXT_PUBLIC_DATA_URL}/data/static.json`)
      let data = await res.json()
      setNavItems(data.navItems)
    }
    load()
  })

  function NavItems(item) {
    return (
      <Link href={item.link} className='w-[20%] max-w-[60px] bg-red-300 mr-5 text-center' key={ item.link }>
        {item.name}
      </Link>
    )
  }


  return (
    <div className='bg-white bg-opacity-5 flex flex-row h-[60px] items-center rounded-lg bg-nav-bg mb-10'>
      <div className='w-1/2 ml-5 bg-green-30 '>
        <Link className='text-gray-300 text-3xl' href={'/#'}>Aditya Sawant</Link>
      </div>
      <div className='w-1/2 flex flex-row justify-end'>

        {navItems.length > 0 ? navItems.map((item) => (
          NavItems(item)
        )) : <>
          <Link href={'/#'} className='w-[20%] min-w-[60px]  min-h-[25px] bg-white bg-opacity-5 mr-5 text-center rounded-xl'>
            
          </Link>
          <Link href={'/#'} className='w-[20%] min-w-[60px]  min-h-[25px] bg-white bg-opacity-5 mr-5 text-center rounded-xl'>
            
          </Link>
          <Link href={'/#'} className='w-[20%] min-w-[60px]  min-h-[25px] bg-white bg-opacity-5 mr-5 text-center rounded-xl'>
            
          </Link>
        </>}


      </div>

    </div>
  )
}

export default HomeNav