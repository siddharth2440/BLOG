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
        })
    })
}

export const login = (req,res) =>{
    const q = 'select * from user where email=?';
    db.query(q,[req.body.email],async (err,data)=>{
        if(data.length == 0) return res.json({"message":"User don't exists"});
        const {password,...others}=data[0]
        const  comparePass =await bcrypt.compare(req.body.password,password);
        if(!comparePass){
            return res.json("Invalid Email or password");
        }else{
            const token = jwt.sign({id:others.id},"jwtsecretKey");
            console.log(others.id);
            res.cookie("token",token,{
                httpOnly:true
            });
            return res.status(200).json(others)
        }
    })
}

export const logout = (req,res) =>{
    return res.cookie("token",null).json({"message":"User is logged out"});    
}