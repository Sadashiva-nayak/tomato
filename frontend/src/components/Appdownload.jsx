import React from 'react'
import { assets } from '../assets/assets'

const Appdownload = () => {
  return (
    <div className='m-auto mt-[100px] text-[max(3vw,20px)] text-center font-[500]' id='app'>
      <p className="">For Better Experience Download <br /> Tomato App</p>
      <div className="flex justify-center gap-[max(3vw,20px)] mt-10">
        <img className='w-[max(30vw,120px)] max-w-[180px] transition duration-500 cursor-pointer' src={assets.play_store} alt="" />
        <img className='w-[max(30vw,120px)] max-w-[180px] transition duration-500 cursor-pointer' src={assets.app_store} alt="" />
      </div>
    </div>
  )
}
export default Appdownload
