import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store/store";

 
import products from "../../common/mocks/data/products";

const initialState = {
    data:[],
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
            console.log('fetchProducts reducer...')
            state.data = action.payload;
        }
       
    }
});

export const {fetchProducts} = productsSlice.actions;
export default productsSlice.reducer;

export function getProducts(){
    return async function getProductsThunk(dispatch: AppDispatch, getState: any){
        console.log('getting productsThunk...')
        
        try {
            const response = await fetch("https://fakestoreapi.com/productss");
            const products = await response.json();
    
            dispatch(fetchProducts(products))
            
        } catch (error) {
            console.log('an error occurred while attempting to fetch products...');
            dispatch(fetchProducts(products))
        }

    }
};