const User = require("../models/Users")

const getAllUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}

const getUserById = async (req, res) => {
    const { id } = req.params
    const users = await User.findById(id)
    if (!users) return res.status(404).json("no user found")
    res.json(users)
}

const createUser = async (req, res) => {
    const { name, userName, email, address, phone } = req.body
    if (!name || !userName) return res.status(404).json("name and userName are requierd")
    const user = await User.find({userName })
console.log(user);

    if (user.length!==0) {
        res.json("userNume nust be uniqe!")

    }
    const users = await User.create({ name, userName, email, address, phone })
    if (!users) return res.status(404).json("Error while adding new user")
    res.json(users)
}

const updateUser = async (req, res) => {
    const { id, name, userName, email, address, phone } = req.body
    if (!name || !userName || !id) return res.status(400).json("name, userName and id are requierd")

    const user = await User.findById(id)
    user.name = name
    user.userName = userName
    user.email = email
    user.address = address
    user.phone = phone
    const newUser = await user.save()
    const users = await User.find()
    res.json(users)
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id)
    if (!user) return res.status(400).json("no user found")
    const result = await user.deleteOne()
    // const reply = `User deleted`
    // res.json(reply)
    const users = await User.find()
    res.json(users)
}



module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser }