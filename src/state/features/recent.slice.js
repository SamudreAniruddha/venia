import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recentArray: []//initial state with empty array
}

// created slice with param name, initial state, reducers, action with payload
const recentSlice = createSlice({
    name: "recent",
    initialState,
    reducers: {
        recentAction: (state, { payload }) => {
            let flag = false;
            for (let i = 0; i <= state.recentArray.length - 1; i++) {
                if (state.recentArray[i].id === payload.id) {
                    flag = true;
                }
                if (flag) {
                    state.recentArray.splice(i, 1);
                    break;
                }
            }

            state.recentArray[state.recentArray.length] = payload;

            if (state.recentArray.length > 4) {
                state.recentArray.splice(0, 1);
            }
        }
    }
});

export const { recentAction } = recentSlice.actions; // actions
export default recentSlice.reducer; // reducers
export const getRecentView = (state) => state.recentView.recentArray;
