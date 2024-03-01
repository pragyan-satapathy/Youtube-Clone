import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        cacheResult: (state, actions) => {
            return {...state, ...actions.payload}
        }
    }
})

export default searchSlice.reducer
export const { cacheResult } = searchSlice.actions