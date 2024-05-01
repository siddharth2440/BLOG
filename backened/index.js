import express from "express"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import authRouter from "./routes/auth.route.js"
import bodyparser from "body-parser"
import morgan from "morgan"
import { config } from "dotenv"
import cookieparser from "cookie-parser"
import cors from "cors"
const PORT = 3002;
const app =express();

//configure dotenv files
config()

//using cors
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

//use bodyparser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//using the morgan
app.use(morgan("dev"));

//cookie-parser
app.use(cookieparser());

app.use("/api/v1/auth",authRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/post",postRouter);

app.listen(PORT,()=>console.log(`Server is running at the port ${PORT}`));