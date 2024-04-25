import {Router} from "express"
const router = Router()
import {getPosts,getPost,addPost,deletePost,updatePost} from "../controllers/post.controller.js"
//routes of posts

router.get("/",getPosts);
router.get("/:id",getPost);
router.post("/",addPost);
router.delete("/:id",deletePost);
router.put("/:id",updatePost);


export default router;