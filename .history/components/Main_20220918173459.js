import React from 'react'

const Main = () => {
  return (
    <div className='container flex flex-col items-center max-w-screen-lg'>
     <video className="max-w-screen-lg" src='./bg-video.mp4' muted={true} autoPlay={true} loop={true}/>
    </div>
  )
}

export default Main