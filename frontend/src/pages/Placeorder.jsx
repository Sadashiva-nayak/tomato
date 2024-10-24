import React, { useContext, useEffect, useState} from 'react'
import { StoreContext } from '../context/StoreContext'

const Placeorder = () => {
  
  const {gettotalcartamount,getItems,cartitems} = useContext(StoreContext);

  const [data,setdata] = useState({
    firstname:"",
    lastname:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onchangehandler = (e)=>{
    const name = e.target.name;
    const value= e.target.value;
    setdata(data=>({...data,[name]:value}));
  }

  const placeorder = async(e)=>{
    e.preventDefault();
    let orderdata={
      address:data,
      items:cartitems,
      amount:gettotalcartamount()+2
    }

    const res = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/order/place`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(orderdata),
    })
    const response = await res.json();
   
     if(response.success){
     window.location.replace(response.session_url)      
     }
     else{
       alert("error"); 
     }
  }

  useEffect(() => {
    getItems();
  },[]);

  return (
      <form onSubmit={placeorder} action="" className="flex flex-col mt-10 md:mt-24 md:flex-row md:justify-between gap-12 md:items-start">
        <div className="w-full max-w-[max(30%,500px)]">
          <p className="font-[500] text-[30px] mb-12">Delivery information</p>
            <div className="flex gap-2">
              <input required name="firstname" onChange={onchangehandler} value={data.firstname} type="text" placeholder='first name' className="mb-4 p-1 w-full rounded outline-[tomato] border-[1px] border-[#c5c5c5]" />
              <input required name="lastname" onChange={onchangehandler} value={data.lastname} type="text" className="mb-4 p-1 w-full rounded outline-[tomato] border-[1px] border-[#c5c5c5]" placeholder='last name' />
            </div>
            <input required name="email" onChange={onchangehandler} value={data.email} type="email" className="mb-4 p-1 w-full rounded outline-[tomato] border-[1px] border-[#c5c5c5]" placeholder='email address'/>
            <input required name="street" onChange={onchangehandler} value={data.street} type="text" className="mb-4 p-1 w-full rounded outline-[tomato] border-[1px] border-[#c5c5c5]" placeholder='street' />
            <div className="flex gap-2">
              <input required name="city" onChange={onchangehandler} value={data.city} type="text" className="mb-4 p-1 w-full rounded outline-[tomato] border-[1px] border-[#c5c5c5]" placeholder='city'/>
              <input required name="state" onChange={onchangehandler} value={data.state} type="text" className="mb-4 p-1 w-full rounded outline-[tomato] border-[1px] border-[#c5c5c5]" placeholder='state'/>
            </div>
            <div className="flex gap-2">
              <input required name="zipcode" onChange={onchangehandler} value={data.zipcode} type="text" className="mb-4 p-1 w-full rounded outline-[tomato] border-[1px] border-[#c5c5c5]" placeholder='zip code'/>
              <input required name="country" onChange={onchangehandler} value={data.country} type="text" className="mb-4 p-1 w-full rounded outline-[tomato] border-[1px] border-[#c5c5c5]" placeholder='country'/>
            </div>
            <input required name="phone" onChange={onchangehandler} value={data.phone} type="text" placeholder='phone'className='mb-4 p-1 w-full rounded outline-[tomato] border-[1px] border-[#c5c5c5]'/>
        </div>
        <div className="w-full max-w-[max(40%,500px)]">
        <div className="flex flex-col gap-5 flex-1">
          <h2>Cart Totals</h2>
          <div className="">
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${gettotalcartamount()}</p>
            </div>
            <hr className='my-2'/>
            <div className="flex justify-between text-[#555]">
              <p>Delivery Cost</p>
              <p>${gettotalcartamount()===0?0:2}</p>
            </div>
            <hr className='my-2'/>
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>${gettotalcartamount()===0?0:gettotalcartamount()+2}</b>
            </div>
          </div>
            <button type='submit' className=' mt-7 border-none text-white bg-[tomato] cursor-pointer rounded py-3 w-[max(15vw,200px)]'>PROCEED TO PAYMENT</button>
        </div>
        </div>
      </form>
  )
}

export default Placeorder
