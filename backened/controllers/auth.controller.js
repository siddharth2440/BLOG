import {db} from "../db.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
export const register = (req,res) =>{
    //check for an existing user
    console.log("reached");
    const q = `select * from user where email = ? or username = ?`;
    db.query(q,[req.body.email,req.body.name],async (err,data)=>{
        if(err) return res.json(err)
        if(data.length) return res.json(data.length)
        const q1 = 'insert into user (`username`,`email`,`password`,`img`) values (?)';
        const {username,email,password,img} = req.body;
        const hashPassword =await bcrypt.hash(req.body.password,10);
        const values = [username,email,hashPassword,img];
        db.query(q1,[values],(err,data)=>{
            if(err) return res.json(err);
            return res.json(data);
        });
    })
}

export const login =async (req,res) =>{
    const q = 'select * from user where email=?';
    console.log("secret of jwt"+process.env.jwtSecretKey);
    db.query(q,[req.body.email],async (err,data)=>{
        if(data.length == 0) return res.json({"message":"User don't exists"});
        const {password,...others}=data[0]
        const  comparePass =await bcrypt.compare(req.body.password,password);
        if(!comparePass){
            return res.json("Invalid Email or password");
        }else{
            // console.log(others.id);
            const token =await jwt.sign({id:others.id},process.env.jwtSecretKey);
            // console.log("Token is "+token);
            // console.log("loginId :- ",others.id);
            // console.log("JWT secret :-  "+process.env.jwtSecretKey);
            res.cookie("token",token);
            return res.status(200).json(others)
        }
    })
}

export const logout = (req,res) =>{
    res.cookie("token",null,{
        maxAge:0,
        secure:true
    });
    return res.json({"message":"User is logged out"});    
}