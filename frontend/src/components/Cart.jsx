import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { removeFromCart } from '../features/cartSlice';
import Card from './Card';



const Cart = () => {
  const cart=useSelector(state=>state.cart)
  const dispatch=useDispatch()

  const handleRemoveFromCart=(cartItem)=>{
    dispatch(removeFromCart(cartItem))

  }
  return (
    <div className="cart-container">
      <h2>Tejas Cart</h2>
        {cart.cartItems.length ===0 ? (

          <div className="cart-empty">
               <p>Your cart is currently empty</p>

                 <div className="start-shopping">
                     <Link to='/'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fillRule="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                     <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                      </svg>
                      <span>Start Shopping</span>
                     </Link>
                 </div>
          </div>
        ) : (<div>
                {/* <div className="titles">
                  <h3 className="product-title">Product</h3>
                  <h3 className="price">Price</h3>
                  <h3 className="quantity">Quantity</h3>
                  <h3 className="total">Total</h3>
                </div> */}

                <div className="products">
                  {cart.cartItems.map(cartItem=> (
                  
                   <Card product={cartItem} key={cartItem.id} handleAddToCart = {() => {handleRemoveFromCart(cartItem)}} btnText='Remove From Cart'  />
                     
                  
                   
                       
                      

                    // <div className="cart-item" key={cartItem.id}>

                    //    <div className="cart-product">
                    //       <img src={cartItem.image} alt={cartItem.name}/>
                    //       <div>
                    //       <h3>{cartItem.name}</h3>
                    //    <p>{cartItem.desc}</p>
                    //    <button>Remove</button>
                    //         </div>
                    //    </div>
                    //    <div className="cart-product-price">${cartItem.price}</div>

                    //     <div className="cart-product-quantity">
                    //        <button>-</button>
                    //         <div className="count">{cartItem.cartQuantity}</div>
                    //        <button>+</button>
                    //     </div>
                    //     <div className="cart-product-total-price">
                    //       ${cartItem.price*cartItem.cartQuantity}
                    //     </div>
                    // </div>
                  ))}
                </div>
             </div>)
             }
    </div>
  )
}

export default Cart
