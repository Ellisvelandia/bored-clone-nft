import React from 'react'

const Main = () => {
  return (
    <div className='container flex flex-col items-center'>
     <video  src='./bg-video.mp4' muted={true} autoPlay={true} loop={true}/>
    </div>
  )
}

export default Main