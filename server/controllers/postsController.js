const Post = require("../models/Posts")

const getAllPosts = async (req, res) => {
    const posts = await Post.find()
    res.json(posts)
}

const getPostById = async (req, res) => {
    const { id } = req.params
    const posts = await Post.findById(id)
    if (!posts) return res.status(404).json("no post found")
    res.json(posts)
}

const createPost = async (req, res) => {
    const { title, body } = req.body
    if (!title ||!body) return res.status(404).json("title and body are requierd")
    const posts = await Post.create({ title, body })
    if (!posts) return res.status(404).json("Error while adding new post")
    res.json(posts)
}

const updatePost = async (req, res) => {
    const { id, title, body } = req.body
    if (!title ||!body || !id) return res.status(400).json("title, body and id are requierd")

    const post = await Post.findById(id)
    post.title = title
    post.body = body
    const newPost = await post.save()
    const posts = await Post.find()
    res.json(posts)
}

const deletePost = async (req, res) => {
    const { id } = req.params
    const post = await Post.findById(id)
    if (!post) return res.status(400).json("no post found")
    const result = await post.deleteOne()
    // const reply = `Post deleted`
    // res.json(reply)
    const posts = await Post.find()
    res.json(posts)
}



module.exports ={ getAllPosts, getPostById,createPost,updatePost,deletePost}