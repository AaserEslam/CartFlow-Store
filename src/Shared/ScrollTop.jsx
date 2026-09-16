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
    

    const handleScrollTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    
    



  return (
    <div onClick={() => handleScrollTop()} className={`fixed md:bottom-6 bottom-4 right-6 md:right-[50%] md:translate-x-[50%] z-50 ${scrollPosition >= 1500 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} animate-bounce  transition-all duration-300`}>
        <div className='bg-primary h-13 w-13 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 shadow-[0px_0px_12px_3px_#ed40b1]'>
            <FaArrowUp className='text-2xl text-secondry '/>
        </div>
    </div>
  )
}

export default ScrollTop