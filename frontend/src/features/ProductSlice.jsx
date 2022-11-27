import { createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
       item:[],
       status:null,
}

export const productsFetch=createAsyncThunk('products/productsFetch',
     async()=>{
           const response=await axios.get("http://localhost:5000/products")
           return response.data; 



}) 

const productsSlice=createSlice({
    name:"products",
    initialState, 
    reducer:{},
    extraReducers:{
        [productsFetch.pending]:(state,action)=>{
            state.status="pending";
        },
        [productsFetch.fulfilled]:(state,{payload})=>{
            console.log(payload)
            state.status="success";
        //    return {...state,item:payload}
        state.item=payload;
        },
        [productsFetch.rejected]:(state,action)=>{
            state.status="rejected";
        }
    }
})
export default productsSlice.reducer
