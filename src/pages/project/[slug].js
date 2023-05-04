import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Frame from '@/components/project/frame'
const Project = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [project, setProject] = useState(null);
  useEffect(() => {
    async function load() {
      let res = await fetch(`${process.env.NEXT_PUBLIC_DATA_URL}/data/projects.json`)
      let data = await res.json()
      // if(!data[slug]) {
      //   router.push('/404')
      //   return
      // }
      setProject(data[slug])
    }
    load()
  },[project, slug]);
  return (
    <>
    <div>Project</div>
      {project ? project.name : <div>Loading...</div> }
      {project ? <Frame project={project} /> : <div>Loading...</div> }
    
    </>
  )
}

export default Project