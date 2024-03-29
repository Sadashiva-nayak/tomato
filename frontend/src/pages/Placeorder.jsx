import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Placeorder = ({showAlert}) => {
  const navigate = useNavigate();
  const {gettotalcartamount,getItems,clearcart} = useContext(StoreContext);
  useEffect(() => {
    getItems();
  });

  const handleonclick=()=>{
    clearcart();
    showAlert("Your order has been placed successfully","congratulations");
    navigate("/");
  }

  return (
      <form action="" className="flex flex-col mt-10 md:mt-24 md:flex-row md:justify-between gap-12 md:items-start">
        <div className="w-full max-w-[max(30%,500px)]">
          <p className="font-[500] text-[30px] mb-12">Delivery information</p>
            <div className="flex gap-2">
              <input type="text" placeholder='first name' className="mb-4 p-1 w-full rounded outline-[tomato] border-[1px] border-[#c5c5c5]" />
              <input type="text" className="mb-4 p-1 w-full rounded outline-[tomato] border-[1px] border-[#c5c5c5]" placeholder='last name' />
            </div>
            <input type="email" className="mb-4 p-1 w-full rounded outline-[tomato] border-[1px] border-[#c5c5c5]" placeholder='email address'/>
            <input type="text" className="mb-4 p-1 w-full rounded outline-[tomato] border-[1px] border-[#c5c5c5]" placeholder='street' />
            <div className="flex gap-2">
              <input type="text" className="mb-4 p-1 w-full rounded outline-[tomato] border-[1px] border-[#c5c5c5]" placeholder='field'/>
              <input type="text" className="mb-4 p-1 w-full rounded outline-[tomato] border-[1px] border-[#c5c5c5]" placeholder='state'/>
            </div>
            <div className="flex gap-2">
              <input type="text" className="mb-4 p-1 w-full rounded outline-[tomato] border-[1px] border-[#c5c5c5]" placeholder='zip code'/>
              <input type="text" className="mb-4 p-1 w-full rounded outline-[tomato] border-[1px] border-[#c5c5c5]" placeholder='country'/>
            </div>
            <input type="text" placeholder='phone'className='mb-4 p-1 w-full rounded outline-[tomato] border-[1px] border-[#c5c5c5]'/>
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
              <p>Delivery Time</p>
              <p>${gettotalcartamount()===0?0:2}</p>
            </div>
            <hr className='my-2'/>
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>${gettotalcartamount()===0?0:gettotalcartamount()+2}</b>
            </div>
          </div>
            <button onClick={handleonclick} className=' mt-7 border-none text-white bg-[tomato] cursor-pointer rounded py-3 w-[max(15vw,200px)]'>PROCEED TO PAYMENT</button>
        </div>
        </div>
      </form>
  )
}

export default Placeorder
