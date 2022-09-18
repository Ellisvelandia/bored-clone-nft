import React from 'react'
import Image from "next/image";
import logo from "../assets/bayc-logo.webp"

const Header = () => {
  return (
    <div className='container fle h-20 justify-center'>
      <Image
      width={300}
      height={78}
      src={logo}
      alt={logo}
      />
    </div>
  )
}

export default Header