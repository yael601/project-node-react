const Manager = require("../models/Managers")

const getAllManagers = async (req, res) => {
    const managers = await Manager.find()
    res.json(managers)
}

const getManagerById = async (req, res) => {
    const { id } = req.params
    const managers = await Manager.findById(id)
    if (!managers) return res.status(404).json("no manager found")
    res.json(managers)
}

const createManager = async (req, res) => {
    const { userName, phone,text,email} = req.body
    if (!userName ||!phone||!text||!email) return res.status(404).json("userName,text,email and phone are requierd")
    const managers = await Manager.create({ userName, phone,text,email })
    if (!managers) return res.status(404).json("Error while adding new manager")
    res.json(managers)
}

const updateManager = async (req, res) => {
    const { id,userName, phone,text,email } = req.body
    if (!userName ||!phone||!text||!email|| !id) return res.status(400).json("userName,text,email,phone and id are requierd")
    const manager = await Manager.findById(id)
    manager.userName = userName
    manager.phone = phone
    manager.text = text
    const newManager = await manager.save()
    const managers = await Manager.find()
    res.json(managers)
}

const deleteManager = async (req, res) => {
    const { id } = req.params
    const manager = await Manager.findById(id)
    if (!manager) return res.status(400).json("no manager found")
    const result = await manager.deleteOne()
    // const reply = `Manager deleted`
    // res.json(reply)
    const managers = await Manager.find()
    res.json(managers)
}



module.exports ={ getAllManagers, getManagerById,createManager,updateManager,deleteManager}