import React from 'react'
import Minting from './Minting'

const Main = () => {
  return (
    <div className='container flex flex-col items-center'>
     <video className="max-w-screen-lg" src='./bg-video.mp4' muted={true} autoPlay={true} loop={true}/>
     <Minting />
    </div>
  )
}

export default Main