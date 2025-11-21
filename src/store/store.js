import { configureStore } from '@reduxjs/toolkit'
import cardReducer from '../store/cartSlice'

export const store = configureStore({
    reducer: {
        cart:cardReducer ,
    }
});