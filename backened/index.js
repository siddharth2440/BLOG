import express from "express"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import authRouter from "./routes/auth.route.js"
const PORT = 3002;
const app =express();


app.use("/api/v1/auth",authRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/post",postRouter);

app.listen(PORT,()=>console.log(`Server is running at the port ${PORT}`));