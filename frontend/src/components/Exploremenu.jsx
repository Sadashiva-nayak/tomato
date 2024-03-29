import React from 'react'
import { menu_list } from '../assets/assets'

const Exploremenu = ({category,setcategory}) => {
  return (
    <div className='flex flex-col gap-5' id='menu'>
        <h1 className='text-[#262626] font-[500]'>Explore our menu</h1>
        <p className='w-full columns-[#808080]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className="flex justify-between items-center gap-[30px] text-center my-5 mx-0 overflow-x-scroll no-scrollbar">
            {
                menu_list.map((item,index)=>{
                    return(
                        <div key={index} onClick={()=>{setcategory(prev=>prev===item.menu_name?'all':item.menu_name)}} className="">
                            <img src={item.menu_image} className={category===item.menu_name?'active1 menu-lst':"menu-lst"} alt="" />
                            <p className=" mt-[10] text-[#747474] cursor-pointer text-[max(1.4vw,16px)]">{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr className='my-[0px] h-[0.5px] flex w-full mx-0 bg-[#7b7b7b] border-none'/>
    </div>
  )
}

export default Exploremenu
