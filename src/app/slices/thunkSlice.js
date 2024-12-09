import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    user: [],
    error:''
}

export const thunk = createAsyncThunk('get/user', async(_,{rejectWithValue,getState}) => {
    console.log(getState())
   try{
    // const res = await fetch('https://jsonplaceholder.typicode.com/users')
    // const data = await res.json()
    // return data
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const {data} = res
    console.log(data)
    return data
   } catch(error){
    return rejectWithValue(error.message)
   }
})

const thunkSlice = createSlice({
    name: 'thunk',
    initialState,
    reducers:{},
    extraReducers: builder=>{
        builder.addCase(thunk.pending,(state,action) => {
            state.isLoading = true
        }).addCase(thunk.fulfilled,(state,action) => {
            state.isLoading = false
            state.user = action.payload
            state.error=''
        }).addCase(thunk.rejected,(state,action) => {
            state.isLoading = false
            state.user = []
            state.error=action.payload
        })
    }
})

export default thunkSlice.reducer