import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [] //initial state with empty array
}

// created slice with param name, initial state, reducers, action with payload
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        featchProducts: (state, { payload }) => {
            state.products = payload;
        },
    },
});

export const { featchProducts } = productSlice.actions; // actions
export default productSlice.reducer; // reducers
export const getAllProducts = (state) => state.products.products; // method to fetch data