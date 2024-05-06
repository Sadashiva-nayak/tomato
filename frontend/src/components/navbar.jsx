import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom' 
import { StoreContext } from '../context/StoreContext';

const navbar = ({curstate,setcurstate}) => {

    const {gettotalcartamount} = useContext(StoreContext);
    const [menu,setmenu] =useState('Menu');
    const navigate= useNavigate();

    const onClick = ()=>{
      if(curstate=="done")
      {
        localStorage.removeItem('token');
        setcurstate("sign up");
      }
      else{
        setcurstate("done");
      }
    }

    const handleclick = ()=>{
      navigate('/myorders');
    }

  return (
    <div className='py-5 flex justify-between items-center'>
      <Link to='/'><img src={assets.logo} className=' w-[100px] lg:w-[140px]' alt="" /></Link>
      <ul className='hidden lg:flex list-none gap-5 text-lg text-[#49557e] text-[17px] '>
        <Link to='/' onClick={()=>setmenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#menu' onClick={()=>setmenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app' onClick={()=>setmenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile App</a>
        <a href='#contact' onClick={()=>setmenu("Contact-Us")} className={menu==="Contact-Us"?"active":""}>Contact Us</a>
      </ul>
      <div className="flex items-center gap-4 lg:gap-[30px]">
        <img className="w-[22px] lg:w-[27px]" src={assets.search_icon} alt="" />
        <div className="relative w-6 h-6">
            <Link to='/cart'><img onClick={()=>setmenu("cart")} src={assets.bag_icon} alt="" /></Link>
            <div className={gettotalcartamount()==0?"":"absolute min-h-[10px] min-w-[10px] bg-[tomato] rounded-lg top-[-6px] right-[-6px] lg:top-[-8px] lg:right-[-8px]"}></div>
        </div>
        <img src={assets.profile_icon} onClick={handleclick} className='cursor-pointer'/>
          {window.location.pathname=="/"?<button onClick={onClick} className=' px-4 py-3 lg:py-[10px] lg:px-[30px] cursor-pointer rounded-[50px] bg-transparent text-base text-[#49557e] border-solid border-[1px] border-[tomato] transition-all duration-300
         hover:bg-[#fff4f2] '>{localStorage.getItem('token')?"log out":"sign in"}</button>:""}
      </div>
    </div>
  )
}

export default navbar
