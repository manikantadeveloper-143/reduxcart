import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { addToCart } from '../features/cartSlice'


import { useGetAllProductsQuery } from '../features/ProductsApi'
import Card from './Card'
// import { useDispatch, useSelector } from 'react-redux';
// import { productsFetch } from '../features/ProductSlice';

const Home = () => {
  // const dispatch=useDispatch()



  // useEffect(()=>{
  //   dispatch(productsFetch())
  // },[dispatch])


 const {data,error,isLoading} = useGetAllProductsQuery()

const dispatch=useDispatch()
const navigate=useNavigate()



 const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
    navigate('/cart')

 }

  return (
    <div className='home-container'>
       { isLoading ? <p>loading...</p> : error ? 
       <p>An error occured...</p> :
        <>
         <h2>Tejas Arrivals</h2>
           <div className='products'>
            {data.map(product => <Card 
                                  product={product} 
                                  key={product.id} 
                                  handleAddToCart={handleAddToCart}
                                  btnText='Add To Cart'/>)
            }
            </div>  
       </>}
    </div>
  )
}

export default Home
