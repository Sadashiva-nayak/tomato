import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets';

const Myorders = () => {

    const [data,setdata]=useState([]);
    const token=localStorage.getItem('token');
    const fetchorders = async()=>{
        const res = await fetch(`https://tomato-backend-green.vercel.app/api/order/userorders`, {
      method: "POST",
      headers: {
        "auth-token": token,
      },
    })
    const response = await res.json();
    setdata(response.data)
    }

    useEffect(()=>{
        if(token){
            fetchorders();
        }
    },[token])

  return (
    <div className='my-24 mx-0'>
      <h2 className="">My Orders</h2>
      <div className="flex flex-col gap-5 mt-7">
        {data.map((order,index)=>{
            return(
                <div className="grid text-[12px] grid-e items-center lg:text-[14px] gap-7 py-3 px-5 text-[#454545] border border-solid border-[tomato]" key={index}>
                    <img src={assets.parcel_icon} alt="" className=" w-12" />
                    <p className="">
                        {order.items.map((item,index)=>{
                            if(index === order.items.length-1){
                                return item.name + ' x ' +item.num
                            }
                            else{
                                return item.name + ' x ' +item.num+","
                            }
                        })}
                    </p>
                    <p>${order.amount}.00</p>
                    <p>Items: {order.items.length}</p>
                    <p><span className='text-[tomato]'>&#x25cf;</span><b className=' font-medium text-[#454545]'>{order.status}</b></p>
                    <button onClick={fetchorders} className='but border-none py-3 px-0 rounded bg-[#ffe1e1] cursor-pointer text-[#454545]'>Track Order</button>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Myorders
