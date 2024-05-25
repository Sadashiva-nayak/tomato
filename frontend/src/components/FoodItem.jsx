import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({name,price,description,image}) => {
  const {cartitems,addtocart,removefromcart}= useContext(StoreContext);
  const[temp , setTemp] = useState(false)
  let item={}
  
  {localStorage.getItem('token') && cartitems.forEach(element => {
    if(element.name==name)
    {
      item=element;
    }
  });
}
  return (
    <div onClick={()=>{setTemp(!temp)}} className='w-full m-auto rounded-2xl animate-fade shadow-md'>
       <div className='relative'>
        <img src={`https://tomato-3qr4.onrender.com/images/${image}`} className='w-full rounded-tl-[15px] rounded-tr-[15px]' alt="" />
        {!item.num?
        <img className='w-[35px] absolute cursor-pointer bottom-[15px] right-[15px] rounded-[50%]' src={assets.add_icon_white} onClick={()=>addtocart(name,price)} alt="" /> :
        <div className="bottom-[15px] right-[15px] absolute flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white">
          <img className='w-[30px]' onClick={()=>removefromcart(name)} src={assets.remove_icon_red} alt="" />
          <p className="">{item.num}</p>
          <img className='w-[30px]' onClick={()=>{addtocart(name,price)}} src={assets.add_icon_green} alt="" />
        </div>
      }
       </div>
       <div className=" p-5">
        <div className="flex justify-between items-center mb-[10px]">
          <p className=" text-xl font-[500]">{name}</p>
          <img className=' w-[70px]' src={assets.rating_starts} alt="" />
        </div>
        <p className="text-[#676767] text-xs">{description}</p>
        <p className="text-[tomato] text-[22px] font-[500] my-10px">${price}</p>
       </div>
    </div>
  )
}

export default FoodItem
