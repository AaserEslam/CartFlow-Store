import React from 'react'
import Watch from '../../Images/Watches.jpg';
import Gadget from '../../Images/Gadgets.jpg';
import Sunglasses from '../../Images/Sunglasses.jpg';
import Heading from '../../Shared/Heading';

const Advices = () => {
  return (
    <div className=''>
        <div>
            <Heading title="Recent News" description="Modern online stores leverage artificial intelligence to personalize customer shopping."/>
        </div>
        <div className='container-center mt-8 flex flex-col gap-4 md:grid grid-cols-3 md:gap-5'>
            <div>
                <div className='overflow-hidden rounded-lg bg-red-500'>
                    <img src={Watch} alt="Watch" className='h-60 w-full rounded-lg hover:scale-110 transition-all duration-500'/>
                </div>
                <div className='mt-6'>
                    <p className='text-gray-400 dark:text-gray-300'>
                        How To Choose Perfect Watches
                    </p>
                    <p className="font-semibold mt-3 dark:text-white">
                        Select quality materials, check movement precision, and match personal style.
                    </p>
                </div>
            </div>
            <div>
                <div className='overflow-hidden rounded-lg bg-red-500'>
                    <img src={Gadget} alt="Watch" className='h-60 w-full rounded-lg hover:scale-110 transition-all duration-500'/>
                </div>
                <div className='mt-6'>
                    <p className='text-gray-400 dark:text-gray-300'>
                        How To Choose Perfect Watches
                    </p>
                    <p className="font-semibold mt-3 dark:text-white">
                        Evaluate primary features, read verified reviews, and set realistic budgets.
                    </p>
                </div>
            </div>
            <div>
                <div className='overflow-hidden rounded-lg bg-red-500'>
                    <img src={Sunglasses} alt="Watch" className='h-60 w-full rounded-lg hover:scale-110 transition-all duration-500'/>
                </div>
                <div className='mt-6'>
                    <p className='text-gray-400 dark:text-gray-300'>
                        How To Choose Perfect Watches
                    </p>
                    <p className="font-semibold mt-3 dark:text-white">
                        Prioritize UV protection, select frame shapes matching face structure.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Advices