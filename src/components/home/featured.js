import Link from 'next/link'
import React from 'react'
const Featured = ({ project }) => {
  if (!project) return (<div className='bg-white bg-opacity-10 w-full m-0 p-0 lg:min-h-[500px] md:min-h-[400px] '></div>)
  return (
    <div className='bg-white bg-opacity-[0.025] hover:bg-opacity-[0.5] w-auto lg:mx-[10%] md:mx-[5%] lg:min-h-[500px] md:min-h-[400px] p-[5%] rounded-3xl '>
      <h1 className='text-4xl mb-5 ml-5 text-slate-300'>
        Featured Project
      </h1>
      <Link href={`/project/${project.link}`} className=''>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt='Featured Project Image' src={`${process.env.NEXT_PUBLIC_DATA_URL}/data/images/${project.image}`}  ></img>
        <div className='mt-5 ml-5'>
          <h2 className='text-3xl font-bold text-white'>{project.name}</h2>
          <p className='text-xl text-white ml-5'>{project.description}</p>
        </div>
      </Link>
    </div>
  )
}

export default Featured