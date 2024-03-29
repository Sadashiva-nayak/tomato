import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = ({showAlert}) => {
  const {food_list,getItems,cartitems,removefromcart,gettotalcartamount} =useContext(StoreContext);
  const navigate = useNavigate();
  useEffect(() => {
    getItems();
  });
  const [promo,setpromo]=useState("");

  const onChange = (e)=>{
    setpromo(e.target.value)
}
  const handlesubmit = ()=>{
    console.log("hi");
    if(promo=="Tomato")
    {
      showAlert("promo code applied","congratulations")
    }
    else
    {
      showAlert("Invalid promo code","sorry")
    }
    document.getElementById("code").value="";
  }

  const handleonclick = ()=>{
    if(gettotalcartamount()!==0){
    navigate('/order');
  }
  else{
  showAlert("No items in cart","sorry");
  }
  }
  return (
    <div key={1} className='mt-24'>
      <div key={2}>
        <div key={3} className="grid items-center text-gray-500 text-[max(1vw,12px)] grid-d">
          <p key={4}>Items</p>
          <p key={5}>Title</p>
          <p key={6}>Price</p>
          <p key={7}>Quantity</p>
          <p key={8}>Total</p>
          <p key={9}>Remove</p>
        </div>
        <br/>
        <hr/>
        {
          cartitems && cartitems.length!==0?cartitems.map((item,index)=>{
            if(item.num>0){
              let image=""
              food_list.forEach(element => {
                if(element.name==item.name)
                image=element.image
              });
              return (
                <div>
                <div className="grid grid-d items-center my-2 text-black text-[max(1vw,12px)]  ">
                  <img src={image} alt="" className=" w-12" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{item.num}</p>
                  <p>${item.price*item.num}</p>
                  <p onClick={()=>removefromcart(item.name)} className="cursor-pointer">x</p>
                </div>
                <hr className='h-[1px] bg-[#e2e2e2] border-none'/>
                </div>
              )
            }
          }):<p className='text-center mt-5 text-[tomato] font-bold text-lg'>NO ITEMS IN CART</p>
        }
      </div>
      <div className="mt-20 flex flex-col md:flex-row justify-between gap-[max(12vw,20px)]">
        <div className="flex flex-col gap-5 flex-1">
          <h2>Cart Totals</h2>
          <div >
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${gettotalcartamount()}</p>
            </div>
            <hr className='my-2'/>
            <div className="flex justify-between text-[#555]">
              <p>Delivery Cost</p>
              <p>${gettotalcartamount()===0 || promo=="Tomoto"?0:2}</p>
            </div>
            <hr className='my-2'/>
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>${gettotalcartamount()===0?0:gettotalcartamount()+2}</b>
            </div>
          </div>
            <button onClick={handleonclick} className='border-none text-white bg-[tomato] cursor-pointer rounded py-3 w-[max(15vw,200px)]'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="flex-1">
          <div >
            <p className="text-[#555]">If you have a promo code, enter here</p>
            <div className="mt-2 flex justify-between items-center bg-[#eaeaea] rounded">
              <input onChange={onChange} id="code" className=' bg-transparent border-none outline-none pl-2' type="text" placeholder='promo code' />
              <button onClick={handlesubmit} className='w-[max(10vw,150px)] text-white border-none bg-black py-3 px-2 rounded'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
