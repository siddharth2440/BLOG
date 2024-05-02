import {Router} from "express"
const router = Router()
import {isLoggedIn} from "../middlewares/auth.middleware.js"
import {getPosts,getPost,addPost,deletePost,updatePost} from "../controllers/post.controller.js"
//routes of posts

router.get("/",getPosts);
// router.get("/:id",isLoggedIn,getPost);
router.get("/:id",getPost);
router.post("/",isLoggedIn,addPost);
router.delete("/:id",isLoggedIn,deletePost);
router.put("/:id",isLoggedIn,updatePost);

export default router;