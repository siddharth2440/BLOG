import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axiosInstance from "../../helpers/axiosInstance"
import toast from "react-hot-toast"
const initialState = {
    isLoggedIn : false,
    user:JSON.parse(localStorage.getItem("user")) || null
}

export const login = createAsyncThunk("/login",async ({email,password})=>{
    const {data} = await axiosInstance.post("/auth/login",{email,password});
    console.log(data);
    return data;
})

export const logout = createAsyncThunk("/logout",async ()=>{
    const {data} = await axiosInstance.get("/auth/logout");
    // console.log(data);
    return data;
})

export const register = createAsyncThunk("/register",async ({username,email,password})=>{
    const registeration = axiosInstance.post("/auth/register",{username,email,password})
    toast.promise(registeration,{
        success:"User Registered Successfully",
        loading:"Registering...",
        error:"Unable to register user"
    })
    return (await registeration).data;
});

const userSlice = createSlice({
    name:"userAuth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(login.fulfilled,(state,action)=>{
            // console.log(action.payload);
            localStorage.setItem("user",JSON.stringify(action.payload));
            localStorage.setItem("isLoggedIN",true);
            state.isLoggedIn = true;
            state.user = action.payload;
        })
        builder.addCase(logout.fulfilled,(state,action)=>{
            state.isLoggedIn = false;
            state.user = null;
            localStorage.clear();
        })
    }
})

export default userSlice.reducer;