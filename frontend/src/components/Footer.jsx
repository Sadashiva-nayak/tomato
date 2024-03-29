import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 py-[20px] px-[8vw] pt-[80px] mt-[100px]' id='contact'>
      <div className="flex flex-col gap-[13px] w-full sm:grid lg:gap-[80px] grid-c">
        <div className="flex flex-col items-start gap-5">
            <img src={assets.logo} alt="" />
            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati cum amet corrupti id, quae, beatae consequatur eos, similique nulla minus sed dolorem dignissimos hic deleniti at ipsa doloremque assumenda asperiores vero! Et, deserunt aut?</p>
            <div className="flex">
                <img src={assets.facebook_icon} alt="" className="w-[40%] mr-[15px]" />
                <img src={assets.twitter_icon} alt="" className="w-[40%] mr-[15px]" />
                <img src={assets.linkedin_icon} alt="" className="w-[40%] mr-[15px]" />
            </div>
        </div>

        <div className="flex flex-col gap-5">
            <h2 className='text-white'>COMPANY</h2>
            <ul>
                <li className=" list-none mb-[10px] cursor-pointer">Home</li>
                <li className=" list-none mb-[10px] cursor-pointer">About Us</li>
                <li className=" list-none mb-[10px] cursor-pointer">Delivery</li>
                <li className=" list-none mb-[10px] cursor-pointer">Privacy Policy</li>
            </ul>
        </div>
        <div className="flex flex-col gap-5">
            <h2 className="text-white">GET IN TOUCH</h2>
            <ul>
                <li>+91 8493241259</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr className='w-full h-0.5 my-5 bg-gray-400 border-none'/>
      <p className="">CopyRight 2024 © Tomato.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
