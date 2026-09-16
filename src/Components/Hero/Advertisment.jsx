import React from 'react'
import PS5 from "../../Images/PS5.png";


const Advertisment = () => {
  return (
    <div>
        <div className='container-center bg-primary py-8 px-10 md:py-0 rounded-2xl flex flex-col justify-center items-center md:grid grid-cols-3 md:gap-5 mt-15 shadow-[0px_5px_40px_2px_#555]'>
            <div className=' md:h-80 pl-8 md:mt-17'>
                <h4 className='text-white text-lg'>30% OFF</h4>
                <h1 className='text-4xl mt-6 md:text-6xl md:w-20 text-white font-bold tracking-wider'>Fine Smile</h1>
                <p className='text-white mt-4 w-30'>10 Jan To 25 Jan</p>
            </div>
            <div className=''>
                <img src={PS5} alt="Playstation" className='w-full h-full md:scale-110 mt-4'/>
            </div>
            <div className=' md:h-80 md:mt-17'>
                <h4 className='text-white text-lg'>Playstation 5</h4>
                <h1 className='text-4xl mt-6 md:text-6xl text-white font-bold tracking-wider'>Winter Sale</h1>
                <p className='text-white mt-4 w-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, praesentium.</p>
                <button className='bg-secondry text-white hover:scale-110 transition-all duration-300 py-2 px-4 cursor-pointer w-30 h-10 rounded-full mt-6'>Shop</button>
            </div>
        </div>
    </div>
  )
}

export default Advertisment