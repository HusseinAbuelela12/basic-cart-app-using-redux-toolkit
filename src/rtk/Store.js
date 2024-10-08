import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./slices/Products-slice";
import  cartSlice  from "./slices/Cart-slice";


export const store = configureStore ( {
    reducer : {
        products: ProductsSlice,
        cart: cartSlice 
    }
} )