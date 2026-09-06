const express = require("express")
const router = express.Router()
const Post = require("../models/Posts");
const postController=require("../controllers/postsController")
// app.use(express.json())
router.get("/",postController.getAllPosts)
router.get("/:id",postController.getPostById)
router.post("/",postController.createPost)
router.put("/",postController.updatePost)
router.delete("/:id",postController.deletePost)


module.exports = router
