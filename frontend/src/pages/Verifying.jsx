import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext';

const Verifying = () => {
    
    const [searchparamas,setsearchparamas]= useSearchParams();
    const success= searchparamas.get("success")
    const orderId= searchparamas.get("orderId")
    const navigate = useNavigate();
    const {clearcart} = useContext(StoreContext);

    const verifypayment = async()=>{

        const obj={
            success:success,
            orderId:orderId
        }
    const res = await fetch(`http://localhost:3000/api/order/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(obj),
    })
    const response = await res.json();
   
     if(response.success){
        navigate('/myorders');
        clearcart();
     }
     else{
       alert("error");
       navigate('/')
     }
    }

    useEffect(()=>{
        verifypayment();
    },[])

    return (
    <div className='min-h-[60vh] grid'>
        <div className=" h-24 w-24 border-solid border-[5px] border-[#bdbdbd] border-t-[tomato] rounded-[50%] animate-spin place-self-center"></div>
    </div>
  )
}

export default Verifying
