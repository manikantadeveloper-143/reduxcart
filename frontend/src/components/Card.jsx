import React from 'react'

const Card = ({product,handleAddToCart,btnText}) => {
  return (
    <div key={product.id} className='product'>

               <h4>{product.name}</h4>
               <img src={product.image} alt={product.name}/>
               <div className="details">
                <span>{product.desc}</span>
                <span className='price'>Rs.{product.price}</span>
               </div>
              
            
              <button onClick={()=>{handleAddToCart(product)}}>{btnText}</button>
               


            </div>
  )
}

export default Card
