import React from 'react'

const Main = () => {
  return (
    <div className='container'>
     <video className="max-w-screen-lg" src='./bg-video.mp4' muted={true} autoPlay={true} loop={true}/>
    </div>
  )
}

export default Main