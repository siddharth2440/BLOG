import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axiosInstance from "../../helpers/axiosInstance"
const initialState = {
    posts:[]
}
export const getPosts = createAsyncThunk("/getAllPosts",async ({cat})=>{
    console.log("Category Slice = "+cat);
    const {data} = await axiosInstance.get(`/post?cat=${cat ?? ""}`);
    console.log(data);
    return data;
})

const postReducer = createSlice({
    name:"post",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getPosts.fulfilled,(state,action)=>{
            state.posts = action.payload;
        })
    }
})


export default postReducer.reducer;