import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollTop = () => {


    const [scrollPosition , setScrollPosition] = useState(0)


    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setScrollPosition(currentScroll)
        }


        window.addEventListener('scroll' , handleScroll)
        return () => {
            window.removeEventListener("scroll" , handleScroll)
        }
        
    } , [])
    
    console.log(scrollPosition);

    const handleScrollTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    
    



  return (
    <div onClick={() => handleScrollTop()} className={`fixed bottom-6 right-[50%] translate-x-[50%] z-50 ${scrollPosition >= 1500 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-all duration-300`}>
        <div className='bg-primary h-13 w-13 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 shadow-[0px_0px_12px_3px_#ed40b1]'>
            <FaArrowUp className='text-2xl text-secondry '/>
        </div>
    </div>
  )
}

export default ScrollTop