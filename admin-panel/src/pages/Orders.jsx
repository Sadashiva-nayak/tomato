import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {toast} from 'react-toastify'
import {assets} from '../assets/assets'
const Orders = ({url}) => {

  const [orders,setorders] = useState([]);

  const fetchallorders = async()=>{
    const response = await axios.post(`${url}/api/order/list`)
    if(response.data.success){
    setorders(response.data.data);
    }
    else{
      toast.error('error');
    }
  }

  useEffect(()=>{
    fetchallorders();
  },[])
  
  const statushandler = async(event,orderId)=>{
    const response = await axios.post(`${url}/api/order/status`,{orderId,status:event.target.value});
    if(response.data.success){
      await fetchallorders();
      }
  }

  return (
    <div className='mx-20 mt-14'>
      <h3 className="text-lg">Orders Page</h3>
      <div className="">
        {orders.map((order,index)=>{
          return(
          <div className="grid-t grid items-start gap-8 border border-solid border-[tomato] my-7 mx-0 text-[#505050]" key={index}>
            <img src={assets.parcel_icon} alt="" className="w-10 lg:w-[60px]" />
            <div>
            <p className=" font-semibold">
              {order.items.map((item,index)=>{
                if(index === order.items.length-1){
                  return item.name +' x ' + item.num;
                }
                else{
                  return item.name +' x ' + item.num+' , ';
                }
              })}
            </p>
            <p className=" font-semibold mt-8 mb-1">{order.address.firstname+" "+order.address.lastname}</p>
            <div className=" mb-3">
              <p className="">{order.address.street+','}</p>
              <p className="">{order.address.city + ', '+order.address.state + ', ' + order.address.country+', '+ order.address.zipcode}</p>
            </div>
            <p className="">{order.address.phone}</p>
            </div>
            <p className="">items: {order.items.length}</p>
            <p className="">${order.amount}</p>
            <select onChange={(event)=>statushandler(event,order._id)} value={order.status} className='bg-[#ffe8e4] border border-solid border-[tomato] text-[12px] lg:text-sm p-1 lg:p-3 w-[max(10vw,150px)] outline-none' name="" id="">
              <option value="Food Processing">Food Processing</option>
              <option value="Out For Delivery">Out For Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default Orders
