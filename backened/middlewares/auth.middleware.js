import jwt from "jsonwebtoken"
export const isLoggedIn =async (req,res,next)=>{
    // console.log(req.cookies);
    const {token} = req.cookies;
    // console.log("Token is"+token);
    if(!token){
        return res.status(400).json({"message":"Token is not there"})
    }
    const checkToken = await jwt.verify(token,process.env.jwtSecretKey);
    if(!checkToken){
        return res.json({
            "message":"Toekn is not valid"
        })
    }
    req.user = checkToken;
    next();
}