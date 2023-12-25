import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import StatusCodes from "../../common/utils/StatusCodes";

const initialState = {
    data:[],
    status:'idle'
}

interface IAction{
    type:string,
    payload:any;
}

const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        fetchProducts(state:any, action:IAction){
            state.data = action.payload;
        }
       
    },
    extraReducers: builder => {
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.status = StatusCodes.LOADING
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.status = StatusCodes.IDLE
            state.data = action.payload
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.status =  StatusCodes.ERROR
        })
    }
});

export const {fetchProducts} = productsSlice.actions;
export default productsSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    return products
})
