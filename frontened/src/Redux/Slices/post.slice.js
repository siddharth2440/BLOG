import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axiosInstance from "../../helpers/axiosInstance"
const initialState = {
    posts:[],
    singlePost:[]
}
export const getPosts = createAsyncThunk("/getAllPosts",async ({cat})=>{
    console.log("Category Slice = "+cat);
    const {data} = await axiosInstance.get(`/post?cat=${cat ?? ""}`);
    // console.log(data);
    return data;
})

export const getPost = createAsyncThunk('/getUniquePost',async ({id})=>{
    // console.log("pahucha kya ?");
    const {data} = await axiosInstance.get("/post/"+id);
    // console.log(data);
    return data; 
})


export const createPost = createAsyncThunk("/createNewPost",async ({title,description:desc,img:url,cat})=>{
    const {data} = await axiosInstance.post("/post",{title:title,description:desc,img:url,cat});
    // console.log(data);
    return data;
})
const postReducer = createSlice({
    name:"post",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getPosts.fulfilled,(state,action)=>{
            state.posts = action.payload;
        }),
        builder.addCase(getPost.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.singlePost = action.payload;
        })
    }
})



export default postReducer.reducer;