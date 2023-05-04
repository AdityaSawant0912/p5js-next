import React, { useState, useEffect } from 'react'
import HomeLayout from '@/components/layouts/home.layout'
import Featured from '@/components/home/featured';
import Catelogue from '@/components/home/catelogue';
import P5content from '@/components/home/p5';
const Home = () => {
  
  const [projectData, setProjectData] = useState({});
  useEffect(() => {
    async function load() {
      let res = await fetch(`${process.env.NEXT_PUBLIC_DATA_URL}/data/projects.json`)
      let data = await res.json()
      setProjectData(data)
    }
    load()
  }, [])
  
  return (
    <HomeLayout>
      <Featured project={projectData[projectData.featured] } />
      <P5content/>
      <Catelogue projectData={projectData} />
    </HomeLayout>
  )
}

export default Home