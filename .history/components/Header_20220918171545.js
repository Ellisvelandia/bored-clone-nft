import React from 'react'
import Image from "next/image";
import logo from "../assets/bayc-logo.webp"

const Header = () => {
  return (
    <div className='container'>
      <Image
      width={300}
      height={}
      src={logo}
      alt={logo}
      />
    </div>
  )
}

export default Header