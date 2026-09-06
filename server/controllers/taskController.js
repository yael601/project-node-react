const Task = require("../models/Task")

const getAllTasks = async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
}

const getTaskById = async (req, res) => {
    const { id } = req.params
    const tasks = await Task.findById(id)
    if (!tasks) return res.status(404).json("no task found")
    res.json(tasks)
}

const createTask = async (req, res) => {
    const { title, tags } = req.body
    if (!title) return res.status(404).json("title is requierd")
    const tasks = await Task.create({ title, tags })
    if (!tasks) return res.status(404).json("Error while adding new task")
    res.json(tasks)
}

const updateTask = async (req, res) => {
    const { id, title, tags } = req.body
    if (!title || !id) return res.status(400).json("title and id are requierd")
    const task = await Task.findById(id)
    task.title = title
    task.tags = tags
    const newTask = await task.save()
    const tasks = await Task.find()
    res.json(tasks)
}
const updateTask2 = async (req, res) => {
    const { id} = req.body
    if (!id) return res.status(400).json(" id is requierd")
    const task = await Task.findById(id)
    task.complete = true
    const newTask = await task.save()
    const tasks = await Task.find()
    res.json(tasks)
}

const deleteTask = async (req, res) => {
    const { id } = req.params
    const task = await Task.findById(id)
    if (!task) return res.status(400).json("no task found")
    const result = await task.deleteOne()

    // const reply = `Task deleted`
    // res.json(reply)
    const tasks = await Task.find()
    res.json(tasks)
}



module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask ,updateTask2}