import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/product.slice";
import catagoryReducer from "./products/catagory.slice";
import filterReducer from "./features/filter.slice";
import recentReducer from "./features/recent.slice";

//created and configure store with assigning reducer value
export const store = configureStore({
    reducer: {
        products: productReducer,
        catagory: catagoryReducer,
        sideBarFilter: filterReducer,
        recentView : recentReducer
    }
})