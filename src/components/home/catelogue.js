/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const Catelogue = ({ projectData }) => {
  if (!projectData) return (<div className='bg-white bg-opacity-10 w-full m-0 p-0 lg:min-h-[500px] md:min-h-[400px] '></div>)

  function Project(project, key) {
    console.log(project.name);
    return (
      <div className='max-w-[50%] sm:max-w[100%] m-auto ' key={key}>
        <Link href={`/project/${project.link}`} >
          <div className='my-5 mx-1 bg-slate-200 bg-opacity-5 p-3'>
            <img alt='Featured Project Image' src={`${process.env.NEXT_PUBLIC_DATA_URL}/data/images/${project.image}`} width={'full'}  >
            </img>
            <h3 className='mx-3 mt-3 text-xl'>{project.name}</h3>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <>
      <div className='flex flex-row flex-wrap justify-center mt-10 lg:min-h-[500px] md:min-h-[400px]  rounded-3xl bg-white bg-opacity-[0.01] p-5'>
        {projectData.sequence ? projectData.sequence.map((project, index) => {
          return Project(projectData[project], index)
        }) : <></>}

      </div>
    </>
  )
}

export default Catelogue