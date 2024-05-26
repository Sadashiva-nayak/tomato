import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { StoreContext } from '../context/StoreContext';

const Login = ({curstate,setcurstate,showAlert}) => {

    const [credentials, setCredentials] = useState({name:"" , email: "", password: ""}) 
    const navigate = useNavigate();
    const{getItems}= useContext(StoreContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(curstate==='login'){
        const response = await fetch("https://tomato-backend-green.vercel.app/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        if (json.success){

            localStorage.setItem('token', json.authtoken); 
            navigate("/");
            showAlert("logged in successfully","success");
            setcurstate('done');
            getItems();
        }
        else{
            showAlert("invalid credentials","error");
        }
      }
      else{
            const {name , email ,password } =credentials;
            const response = await fetch("https://tomato-backend-green.vercel.app/api/auth/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name,email,password})
            });
            const json = await response.json()

            if (json.success){

                localStorage.setItem('token', json.authtoken); 
                navigate("/");
                showAlert("logged in successfully","success");
                setcurstate('done');
                getItems();
            }
            else{
                showAlert("This email has already signed up","error");
            }
    }
}
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div className='absolute z-10 w-full h-full bg-[#00000090] grid'>
      <form id="form" onSubmit={handleSubmit} action="" className=" place-self-center text-[#808080] bg-white flex flex-col gap-6 py-6 px-7 rounded-lg text-sm animate-fade">
        <div className="flex justify-between items-center text-black">
            <h1 className="text-[20px]">{curstate=="login"?"login":"sign up"}</h1>
        </div>
        <div className="flex flex-col gap-5">
            {curstate==='login'?<></>:<input onChange={onChange} type="text" name="name" placeholder='your name' className=' rounded-md p-2 outline-none border-[1px] border-black' required/>}
            <input onChange={onChange} type="email" placeholder='enter your email' name="email" className=' rounded-md p-2 outline-none border-[1px] border-black' required/>
            <input onChange={onChange} name='password' type="password" placeholder='enter password' className=' rounded-md p-2 outline-none border-[1px] border-black' required/>
        </div>
        <button type='submit' className='p-2 rounded-md text-sm border-none text-white bg-[tomato]'>{curstate==="sign up"?"create account":"login"}</button>
        <div className="flex items-start gap-2 -mt-4">
            <input type="checkbox" className="mt-1" />
            <p className="">By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {curstate==='login'?<p className="">Create a new account? <span className='text-[tomato] cursor-pointer font-[500]' onClick={()=>setcurstate('sign up')}>Click here</span></p>:
         <p className="">Already have an account? <span className='text-[tomato] cursor-pointer font-[500]' onClick={()=>setcurstate('login')}>login here</span></p>}
      </form>
    </div>
  )
}

export default Login
