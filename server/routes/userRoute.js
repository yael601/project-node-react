const express = require("express")
const router = express.Router()
const User = require("../models/Users");
const userController=require("../controllers/usersController.js")
const verifyJWT = require("../middleware/verifyJWT")
router.use(verifyJWT)
// app.use(express.json())
router.get("/",userController.getAllUsers)
router.get("/id/",verifyJWT,userController.getUserById)
router.post("/",userController.createUser)
router.put("/",verifyJWT,userController.updateUser)
router.delete("/",verifyJWT,userController.deleteUser)
router.get("/login/",userController.login)

module.exports = router