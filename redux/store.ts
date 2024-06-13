import userReducer from '@/redux/slices/userSlice'
import { configureStore } from "@reduxjs/toolkit";



const store = configureStore(
    {
        reducer: {
            users: userReducer
        }
    }
);
export default store;