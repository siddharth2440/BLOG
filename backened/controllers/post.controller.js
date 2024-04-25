import {db} from "../db.js"
export const getPosts = async (req,res) => {
    const q = `select * from posts`;
    db.query(q,(err,data)=>{
        return res.json(data);
    })
}

export const getPost = async (req,res) => {
    
}

export const addPost = async (req,res) => {
    
}
export const deletePost = async (req,res) => {
    
}
export const updatePost = async (req,res) => {
    
}