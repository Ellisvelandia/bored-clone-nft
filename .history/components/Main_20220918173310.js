import React from 'react'

const Main = () => {
  return (
    <div className='container'>
     <video className="max-wscr" src='./bg-video.mp4' muted={true} autoPlay={true} loop={true}/>
    </div>
  )
}

export default Main