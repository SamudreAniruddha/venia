import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    catagory: [] //initial state with empty array
}

// created slice with param name, initial state, reducers, action with payload
const catagorySlice = createSlice({
    name: "catagory",
    initialState,
    reducers: {
        featchCatagory: (state, { payload }) => {
            state.catagory = payload;
        },
    },
});

export const { featchCatagory } = catagorySlice.actions; // actions
export default catagorySlice.reducer; // reducers
export const getAllCatagory = (state) => state.catagory.catagory; // method to fetch data