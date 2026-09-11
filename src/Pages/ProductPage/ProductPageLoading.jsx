import React from 'react'

const ProductPageLoading = () => {
  return (
    <div className='pt-4 pb-8 container-center grid grid-cols-2 items-center gap-4 animate-pulse'>
        <div className='bg-gray-300 h-110'>

        </div>
        <div className='flex flex-col gap-15'>
            <div className='bg-gray-300 grow h-6'></div>
            <div className='bg-gray-300 grow h-6'></div>
            <div className='bg-gray-300 grow h-6'></div>
            <div className='bg-gray-300 grow h-6'></div>
            <div className='bg-gray-300 grow h-6'></div>
        </div>
    </div>
  )
}

export default ProductPageLoading