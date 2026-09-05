import React from 'react'

const Heading = ({title , description}) => {
  return (
    <div className='mt-12 container-center'>
      <div className='p-3 flex items-center justify-center'>
            <h2 className='font-semibold text-2xl capitalize md:text-3xl bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent'>{title}</h2>
      </div>
      <div>
        <p className='p-1 flex items-center dark:text-white justify-center text-sm md:text-[15px] tracking-wide text-gray-600 font-semibold '>{description}</p>
      </div>
      <hr className='mt-4 text-gray-300 md:w-155 mx-auto'/>
    </div>
  )
}

export default Heading