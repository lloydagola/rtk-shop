import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../slices/cartSlice'
import productSlice from "../slices/productsSlice";

const store = configureStore({
    reducer:{
        cart : cartSlice,
        products : productSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;