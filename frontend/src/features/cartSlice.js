import {createSlice} from "@reduxjs/toolkit";
import { toast } from "react-toastify";

  const initialState={
      cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
      cartTotalQuantity:0,
      cartTotalAmount:0
  }

  
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
         addToCart(state,action){  

          const itemIndex=state.cartItems.findIndex(item => item.id === action.payload.id)
              if(itemIndex>=0){
                state.cartItems[itemIndex].cartQuantity +=1;
                toast.info(`Increased ${state.cartItems[itemIndex].name} cart quantity`,{
                  position:"bottom-left",
                  autoClose : 2000,
                  pauseOnHover : false
                })


              }else{
                const tempProduct={...action.payload,cartQuantity:1}
            state.cartItems.push(tempProduct);
            toast.success(`${action.payload.name} added to cart`,{
              position:"bottom-left",
              autoClose : 2000,
              pauseOnHover : false

            })
              }
           localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
         
         },
         removeFromCart(state,action){
          const nextCardItems=state.cartItems.filter(cartItem=> cartItem.id !== action.payload.id)
          state.cartItems=nextCardItems;

          localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
          
          toast.error(`${action.payload.name} remove from cart`,{
            position:"bottom-left",
            autoClose : 2000,
            pauseOnHover : false

          })
         }

    }
})
export const {addToCart,removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;