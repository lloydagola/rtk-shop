import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../common/types/types";


const initialState: IProduct[] = []

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state, action){
            state.push(action.payload)
        }
    }
})

export const {add} = cartSlice.actions;
export default cartSlice.reducer;