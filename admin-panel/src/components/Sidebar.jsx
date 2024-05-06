import React from 'react'
import { assets } from '../assets/assets'
import {NavLink} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className=' border-t-0 w-[18%] min-h-[100vh] border-[#a9a9a9] border-[1.5px] border-solid text-[max(1vw,10px)]'>
      <div className="pt-[50px] flex flex-col pl-[20%] gap-5">
        <NavLink to='/add' className=" flex items-center gap-3 border border-solid border-[#a9a9a9] border-r-0 py-2 px-[10px] rounded-tl-[3px] rounded-tr-none rounded-br-none rounded-bl-[3px] cursor-pointer">
          <img src={assets.add_icon} alt="" className=''/>
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink to='/list' className=" flex items-center gap-3 border border-solid border-[#a9a9a9] border-r-0 py-2 px-[10px] rounded-tl-[3px] rounded-tr-none rounded-br-none rounded-bl-[3px] cursor-pointer">
          <img src={assets.order_icon} alt="" className=''/>
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink to='/orders' className="flex items-center gap-3 border border-solid border-[#a9a9a9] border-r-0 py-2 px-[10px] rounded-tl-[3px] rounded-tr-none rounded-br-none rounded-bl-[3px] cursor-pointer">
          <img src={assets.order_icon} alt="" className=''/>
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
