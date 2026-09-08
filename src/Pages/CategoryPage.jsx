import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CardProducts from '../Components/Hero/CardProducts';
import Heading from '../Shared/Heading';

const CategoryPage = () => {

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const {category} = useParams()

    
    


    useEffect(() => {
            const fetchProductsByCategory = async () => {
                try{
                    const res = await axios.get(`https://dummyjson.com/products/category/${category}`);
                    const products = res.data.products
                    setProducts(products)
                }
                catch(error){
                    console.error(error);
                    
                }
                finally{
                    setLoading(false)
                }
            }

            fetchProductsByCategory()
    } , [category])

  return (
    <div className='md:mt-20 pb-8'>
        <div className='container-center flex max-md:flex-col md:flex-wrap gap-4 item-center justify-between'>
            {products?.map((item , key) => (
                <CardProducts key={key} item={item}/>
            ))}
        </div>
    </div>
  )
}

export default CategoryPage