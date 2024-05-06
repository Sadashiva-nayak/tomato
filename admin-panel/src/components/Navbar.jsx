import React from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-2 px-[4%]'>
        <img alt="" src={assets.logo} className="w-[max(10%,80px)]" />
        <img alt="" src={assets.profile_image} className=" w-10" />
    </div>
  )
}

export default Navbar
