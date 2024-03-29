import React from 'react'

const Header = () => {
  return (
    <div className='h-[34vw] my-[30px] mx-auto bg'>
      <div className=" absolute bottom-7 flex justify-center items-start gap-[1.5vw] max-w-[52%] left-[3vw] md:bottom-[10%] md:left-[6vw] flex-col animate-fade">
        <h2 className=' font-[500] text-white text-[16px] sm:text-[max(4.5vw,22px)]'>Order Your Favourite Food Here</h2>
        <p className='hidden min-[545px]:block font-[500] text-[10px] text-white md:text-[1vw]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button className='border-none text-[#747474] text-xs font-[500] py-[1vw] px-[2.3vw] bg-white md:text-[max(1vw,13px)] rounded-[50px]'>View Menu</button>
      </div>
    </div>
  )
}

export default Header
