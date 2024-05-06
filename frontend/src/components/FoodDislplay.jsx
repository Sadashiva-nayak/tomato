import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDislplay = ({category}) => {
    
  const {food_list} = useContext(StoreContext)

  return (
    <div className='mt-[25px]'>
      <h2 className="text-[max(2vw,24px)] font-[500]">Top DIshes Near You</h2>
      <div className=" grid mt-[30px] gap-[30px] gap-y-[50px] grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
        {food_list.map((item,index)=>{
          if(category==='all'|| category===item.category)
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
        })}
      </div>
    </div>
  )
}

export default FoodDislplay
