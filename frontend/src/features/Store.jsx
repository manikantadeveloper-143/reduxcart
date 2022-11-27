import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './ProductSlice';
import { ProductsApi } from "./ProductsApi";
import cartReducer from "./cartSlice"

export const Store=configureStore({
    reducer:{
        products:productsReducer,
        cart:cartReducer,
        [ProductsApi.reducerPath]:ProductsApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductsApi.middleware),


})