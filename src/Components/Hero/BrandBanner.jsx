import React from 'react'
import br1 from '../../Images/br-1.png';
import br2 from '../../Images/br-2.png';
import br3 from '../../Images/br-3.png';
import br4 from '../../Images/br-4.png';
import br5 from '../../Images/br-5.png';

const BrandBanner = () => {

    const Images = [
        {
            URl:br1,
            alt:"Banner"
        },
        {
            URl:br2,
            alt:"Banner"
        },
        {
            URl:br3,
            alt:"Banner"
        },
        {
            URl:br4,
            alt:"Banner"
        },
        {
            URl:br5,
            alt:"Banner"
        }
    ]

  return (
    <div>
        <div className='w-full bg-gray-300 dark:bg-gray-500 flex max-md:flex-col justify-around items-center max-md:gap-10 py-5 md:py-10 px-5 md:h-20 mt-25'>
            {Images.map((img , key) => (
                <img key={key} src={img.URl} alt={img.alt} className='w-20'/>
            ))}
        </div>
    </div>
  )
}

export default BrandBanner