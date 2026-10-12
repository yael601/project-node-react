const User = require("../models/Users")
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')

const getAllUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}

const getUserById = async (req, res) => {
    // const { id } = req.params
    const users = await User.findById(req.user._id)
    if (!users) return res.status(404).json("no user found")
    res.json(users)
}

const createUser = async (req, res) => {
    products:[productSchema]
    const {userName,passowrd,name, email, phone} = req.body
    if (!passowrd || !userName||!phone||!name) return res.status(404).json("name,phone and userName are requierd")
    const user = await User.find({userName })
    console.log(user)
    if (user.length!==0) {
        res.json("userNume nust be uniqe!")
    }
    const hashedPwd = await bcrypt.hash(userName, 10)
    const users = await User.create({ name, userName:hashedPwd, email, address, phone })
    if (!users) return res.status(404).json("Error while adding new user")
    res.json(users)
}

const updateUser = async (req, res) => {
    // const { id, name, userName, email, address, phone } = req.body
    // if (!name || !userName || !id) return res.status(400).json("name, userName and id are requierd")

    const user = await User.findById(id)
    user.name = req.user.name
    user.userName = req.user.userName
    user.email = req.user.email
    user.address = req.user.address
    user.phone = req.user.phone
    const newUser = await user.save()
    const users = await User.find()
    res.json(users)
}

const deleteUser = async (req, res) => {
    // const { id } = req.params
    const user = await User.findById(req.user._id)
    if (!user) return res.status(400).json("no user found")
    const result = await user.deleteOne()
    // const reply = `User deleted`
    // res.json(reply)
    const users = await User.find()
    res.json(users)
}
//מהמורה login פונקצית 
const login = async (req, res) => {
const { username, password } = req.body
if (!username || !password) {
return res.status(400).json({ message: 'All fields are required'})
}
const foundUser = await User.findOne({username}).lean()
if (!foundUser || !foundUser.active) {
return res.status(401).json({ message: 'Unauthorized' })
}
const match = await bcrypt.compare(password,foundUser.password)
if(!match)return res.status(401).json({ message:'Unauthorized' })
// res.send("Logged In")
const userInfo= {
    _id:foundUser._id,
    userName:foundUser.userName,
    passowrd:foundUser.password,
    name:foundUser.name,
    email:foundUser.email,
    phone:foundUser.phone,
    address:foundUser.address,
    manooy:foundUser.manooy,
    numAshrai:foundUser.numAshrai,
    idAshrai:foundUser.idAshrai,
    dateAshrai:foundUser.dateAshrai,
    kodAshrai:foundUser.kodAshrai,
    products:foundUser.products,
    serchLast:foundUser.serchLast,
    // timestamps:foundUser.timestamps,
}
const accessToken=jwt.sign(userInfo,process.env.ACCESS_TOKEN_SECRET)
res.json({accessToken:accessToken})
}
module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser ,login}