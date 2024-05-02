import {configureStore} from "@reduxjs/toolkit"
import postSlice from "./Slices/post.slice";
import userSlice from "./Slices/user.slice";
const store = configureStore({
    reducer:{
        post:postSlice,
        user:userSlice
    }
})

export default store;