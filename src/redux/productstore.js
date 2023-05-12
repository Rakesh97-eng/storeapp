import { configureStore } from "@reduxjs/toolkit";
import products from './productslice'


export const ProductStore = configureStore({
    reducer:{
        products:products
    }
})