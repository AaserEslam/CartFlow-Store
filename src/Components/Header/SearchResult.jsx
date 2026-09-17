import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartProvider/CartContext';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import CardProducts from '../Hero/CardProducts';
import CardProductsLoading from '../Hero/CardProductsLoading';

const SearchResult = () => {

  const { cartItems, addToCart, addToFav, favouriteItems, removeFromFav } =
    useContext(CartContext);
//   const isInCart = cartItems?.some((i) => i.id === item.id);

//   const isInFav = favouriteItems?.some((i) => i.id === item.id);

    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")
      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(true);

        useEffect(() => {
    const fetchSearchResults = async () => {
 
        try {
          const results = await axios.get(
            `https://dummyjson.com/products/search?q=${query}`,
          );
          setProducts(results.data.products);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      
    };

    fetchSearchResults();
  }, [query]);


  return (
    <div className='container-center pb-15'>
        <div>
            <h1 className='text-center text-2xl md:text-3xl bg-linear-to-r from-primary to-secondry bg-clip-text text-transparent w-fit mx-auto font-semibold'>Result Of : <span>{query}</span></h1>
        </div>
        <div className='flex items-center flex-wrap gap-5  mt-10'>
            {loading ? (
                products?.map((item , key) => (
                <CardProductsLoading key={key} item={item}/>
            ))
            ) : 
            (
                products?.map((item , key) => (
                <CardProducts key={key} item={item}/>
            ))
            )}
        </div>
    </div>
  )
}

export default SearchResult