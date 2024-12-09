import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: []
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUsers: (state, action) =>{
           state.user = [...state.user,action.payload]
        },
        deleteUsers: (state,action) => {
           state.user = state.user.filter((user,i) => i !== action.payload)
        }
    }
})

export const {setUsers,deleteUsers} = userSlice.actions
export default userSlice.reducer