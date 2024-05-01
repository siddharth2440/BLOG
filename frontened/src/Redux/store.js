import {configureStore} from "@reduxjs/toolkit"
import postSlice from "./Slices/post.slice";

const store = configureStore({
    reducer:{
        post:postSlice
    }
})

export default store;