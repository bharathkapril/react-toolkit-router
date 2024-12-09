import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

const logSlice = createSlice({
    name: "log",
    initialState,
    reducers:{
        setUser: (state,action) => {
            state.user = action.payload
        },
        removeUser: (state, action) => {
            state.user = null
        }
    }
})

export const {setUser, removeUser} = logSlice.actions
export default logSlice.reducer