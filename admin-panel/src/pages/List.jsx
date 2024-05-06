import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {

  const [list, setlist] = useState([]);

  const fetchlist = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setlist(response.data.data);
    } else {
      toast.error("error");
    }
  };

  useEffect(() => {
    fetchlist();
  }, []);

  const removefood = async(id)=>{
    const response = await axios.post(`${url}/api/food/remove`,{id:id});
    await fetchlist();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("error");
    }
  }
  return (
    <div className="mt-12 mx-auto w-[73%] flex flex-col">
      <p className='text-gray-400 mb-3'>All Food List</p>
      <div className="">
        <div className="grid items-center gtc gap-3 py-3 px-4 border border-solid border-[#cacaca] bg-[#f9f9f9]">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
          </div>
          {list.map((item, index) => {
            return (
              <div key={index} className="grid items-center gtc gap-3 py-3 px-4 border border-solid border-[#cacaca]">
                <img src={`${url}/images/` + item.image} alt="" className=" w-12" />
                <p className="">{item.name}</p>
                <p className="">{item.category}</p>
                <p className="">${item.price}</p>
                <p onClick={()=>removefood(item._id)} className="cursor-pointer">X</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default List;
