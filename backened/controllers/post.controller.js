import {db} from "../db.js"
export const getPosts = async (req,res) => {
    console.log(req.query.cat);
    console.log("reached");
    const q = req.query.cat?'select * from posts where cat = ?':'select * from posts'
    db.query(q,[req.query.cat],(err,data)=>{
        return res.json(data);
    })
}   

export const getPost = async (req,res) => {
    console.log("API call hua hai");
    const q = 'select `title`,`desc`,p.img,`date` from user u join posts p on u.id = p.uid where p.id = ?'
    db.query(q,[req.params.id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data);
    })
}

export const addPost = async (req,res) => {
    const {id} = req.user;
    const {title,description,img,cat} = req.body;
    console.log(title,description,img,cat);
    const date = new Date();
    const q = 'insert into posts (`title`,`desc`,`img`,`date`,`uid`,`cat`) values (?)'
    const values = [title,description,img,`${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`,id,cat];
    db.query(q,[values],(err,data)=>{
        if(err) return res.json({"message":"Err in creating the your post"+err.message})
        return res.json(data);
    })
}
export const deletePost = async (req,res) => {
    const q = 'delete from posts where id = ? and uid = ?'
    db.query(q,[req.params.id,req.user.id],(err,data)=>{
        if(err) return res.json({"message":"Err in deleting the User Posts"})
        return res.json(data);
    })
}

export const updatePost = async (req,res) => {
    const {title,desc,img,cat} = req.body;
    const date = new Date();
    const q = 'update posts set `title` = ?,`desc` = ?,`img` = ?,`date` = ?,`cat` = ? where `uid` = ? && `id` = ?';
    const values = [title,desc,img,`${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`,cat];
    db.query(q,[...values,req.user.id,req.params.id],(err,data)=>{
        if(err) return res.json({"message":"error in updating the post"+err.message})
        return res.json(data)
    });
}