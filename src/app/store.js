import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import thunkReducer from "./slices/thunkSlice";
import logReducer from "./slices/logSlice";


export const store = configureStore({
    reducer: {
        userInfo: userReducer,
        thunkReducer,
        logInfo: logReducer
    }
})