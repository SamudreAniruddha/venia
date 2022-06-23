import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterFlag: false, //initial state with empty array
    filterArray: []
}

// created slice with param name, initial state, reducers, action with payload
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        toggleFilter: (state, { payload }) => {
            state.filterFlag = payload;
        },
        addfilterData: (state, { payload }) => {
            if (!state.filterArray.includes(payload))
                state.filterArray.push(payload);
        },
        removefilterData: (state, { payload }) => {
            state.filterArray.splice(state.filterArray.indexOf(payload), 1);
        },
        clearAllfilterData: (state, { payload }) => {
            state.filterArray = [];
        },
    },
});

export const { toggleFilter, addfilterData, removefilterData, clearAllfilterData } = filterSlice.actions; // actions
export default filterSlice.reducer; // reducers
export const getFilterFlag = (state) => state.sideBarFilter.filterFlag;
export const getFilterArray = (state) => state.sideBarFilter.filterArray; // method to fetch data