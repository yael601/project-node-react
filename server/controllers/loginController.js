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
module.exports = {login}

// const Task = require("../models/Prodact")

// const getAllTasks = async (req, res) => {
//     const tasks = await Task.find()
//     res.json(tasks)
// }

// const getTaskById = async (req, res) => {
//     const { id } = req.params
//     const tasks = await Task.findById(id)
//     if (!tasks) return res.status(404).json("no task found")
//     res.json(tasks)
// }
// // const task = await Task.create({ name, important, tags,
// // type, taskDate, icon, range , location, status ,
// // user:req.user._id })
// const createTask = async (req, res) => {
//     const { title, tags } = req.body
//     if (!title) return res.status(404).json("title is requierd")
//     const tasks = await Task.create({ title, tags })
//     if (!tasks) return res.status(404).json("Error while adding new task")
//     res.json(tasks)
// }

// const updateTask = async (req, res) => {
//     const { id, title, tags } = req.body
//     if (!title || !id) return res.status(400).json("title and id are requierd")
//     const task = await Task.findById(id)
//     task.title = title
//     task.tags = tags
//     const newTask = await task.save()
//     const tasks = await Task.find()
//     res.json(tasks)
// }
// const updateTask2 = async (req, res) => {
//     const { id} = req.body
//     if (!id) return res.status(400).json(" id is requierd")
//     const task = await Task.findById(id)
//     task.complete = true
//     const newTask = await task.save()
//     const tasks = await Task.find()
//     res.json(tasks)
// }

// const deleteTask = async (req, res) => {
//     const { id } = req.params
//     const task = await Task.findById(id)
//     if (!task) return res.status(400).json("no task found")
//     const result = await task.deleteOne()

//     // const reply = `Task deleted`
//     // res.json(reply)
//     const tasks = await Task.find()
//     res.json(tasks)
// }



// module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask ,updateTask2}