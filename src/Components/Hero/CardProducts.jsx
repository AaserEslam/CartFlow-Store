import React from 'react'
import { FaCartPlus, FaHeart, FaShare, FaStar } from 'react-icons/fa'

const CardProducts = ({item}) => {
  
  return (
    <div className='container-center p-4 relative border-2 border-primary w-50 h-70 rounded-lg dark:bg-gray-500/20 flex flex-col items-center cursor-pointer hover:shadow-[0px_0px_10px_6px_#ed40b1] transition-all duration-300 group overflow-hidden'>
        <div className="h-30 w-30">
            <img src={item?.images[0]} alt="" className='h-full w-full rounded-lg'/>
        </div>
        <div className='flex flex-col items-center justify-center absolute z-50 top-10 left-50 group-hover:left-36 gap-10 transition-all duration-300'>
          <span className='border-2 border-primary p-2 bg-primary rounded-full hover:shadow-[0px_0px_10px_6px_#ed40b1] transition-all duration-300 cursor-pointer'><FaCartPlus className='text-white text-[22px]'/></span>
          <span className='border-2 border-primary p-2 bg-primary rounded-full hover:shadow-[0px_0px_10px_6px_#ed40b1] transition-all duration-300 cursor-pointer'><FaHeart className='text-secondry text-[22px]'/></span>
          <span className='border-2 border-primary p-2 bg-primary rounded-full hover:shadow-[0px_0px_10px_6px_#ed40b1] transition-all duration-300 cursor-pointer'><FaShare className='text-cyan-500 text-[22px]'/></span>
        </div>
        <div className='flex-col flex items-center'>
          <div className='flex items-center justify-center gap-1 mt-6 text-primary'>
            <span><FaStar/></span>
            <span><FaStar/></span>
            <span><FaStar/></span>
            <span><FaStar/></span>
          </div>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-md line-clamp-1 font-semibold mt-4 bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent'>{item?.title.replace('-' , ' ')}</h2>
            <p className='text-md mt-2 text-text dark:text-white font-bold tracking-wider'>${item?.price}</p>
        </div>
        </div>
    </div>
  )
}

export default CardProducts