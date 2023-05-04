import React, {useEffect} from 'react'

const Frame = ({project}) => {
  
  useEffect(() => {
    // if(document){
    //   console.log("here");
    //   console.log(document.querySelector('main'));
    //   document.querySelector('iframe').contentWindow.document.querySelector('body').style.color = "white"
    // }
  }, []);
  
  return (
    <>
      <div className='m-0 p-0, overflow-hidden '>
        <iframe src={`${process.env.NEXT_PUBLIC_DATA_URL}/${project.link}/`} className='overflow-hidden overflow-x-hidden overflow-y-hidden h-full w-full absolute' height={'100%'} width={'100%'} ></iframe>
      
      </div>
    
    
    </>
  )
}

export default Frame