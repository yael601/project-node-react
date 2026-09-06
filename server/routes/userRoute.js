const express = require("express")
const router = express.Router()
const User = require("../models/Users");
const userController=require("../controllers/usersController.js")
// app.use(express.json())
router.get("/",userController.getAllUsers)
router.get("/:id",userController.getUserById)
router.post("/",userController.createUser)
router.put("/",userController.updateUser)
router.delete("/:id",userController.deleteUser)


module.exports = router