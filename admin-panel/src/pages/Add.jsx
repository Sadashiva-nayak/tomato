import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify'

function Add({url}) {

  const [image,setimage] = useState(false);
  const [data,setdata]=useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })

  const onchangehandler=(e)=>{
    const name = e.target.name;
    const value= e.target.value;
    setdata((data)=>({...data,[name]:value}))
  }

 const onsubmithandler= async(e)=>{
    e.preventDefault();
     const formdata= new FormData();
     formdata.append('name',data.name);
     formdata.append('description',data.description);
     formdata.append('price',Number(data.price));
     formdata.append('category',data.category);
     formdata.append('image',image);
     const response = await axios.post(`${url}/api/food/add`,formdata);
     if(response.data.success){
       setdata({
         name:"",
         description:"",
         price:"",
         category:"Salad"
       })
       setimage(false);
       toast.success(response.data.message)
     }
     else{
      toast.error(response.data.message)
     }
 } 

  return (
    <div className='w-[70%] mt-16 text-sm text-[#6d6d6d] ml-[max(5vw,25px)]'>
      <form action="" className='flex flex-col gap-5' onSubmit={onsubmithandler}>
        <div className="flex flex-col gap-[10px] w-32">
          <p className="">Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input className='border border-black border-solid' onChange={(e)=>setimage(e.target.files[0])} type="file" name="image" id="image" hidden required/>
        </div>
        <div className="flex flex-col gap-[10px] w-[max(40%,280px)]">
          <p className="">Product Name</p>
          <input onChange={onchangehandler} value={data.name} className='p-3 border border-black border-solid' type="text" name='name' autoComplete='off' placeholder='Type Here'/>
        </div>
        <div className="flex flex-col gap-[10px] w-[max(40%,280px)]">
          <p className="">Product Description</p>
          <textarea autoComplete='off' onChange={onchangehandler} value={data.description} className='p-3 border border-black border-solid' name="description" id="description" rows="6" placeholder='write content here'></textarea>
        </div>
        <div className="flex gap-7">
          <div className="flex flex-col gap-[10px]">
            <p className="">Product Category</p>
            <select onChange={onchangehandler} className='max-w-32 p-3 border border-black border-solid' name="category" id="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">CakePasta</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
              <option value="Pure Veg">Pure Veg</option>
            </select>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="">Product Price</p>
            <input autoComplete='off' onChange={onchangehandler} value={data.price} className='max-w-32 p-3 border border-black border-solid' type="number" name='price' placeholder='$20'/>
          </div>
        </div>
        <button type='submit' className='max-w-32 p-3 border-none bg-black text-white cursor-pointer'>ADD</button>
      </form>
      
    </div>
  )
}

export default Add
