const KindManooy = require("../models/kindmanooys")
const getAllKindManooys = async (req, res) => {
    const kindmanooys = await KindManooy.find()
    res.json(kindmanooys)
}

const getKindManooyById = async (req, res) => {
    const { id } = req.params
    const kindmanooys = await KindManooy.findById(id)
    if (!kindmanooys) return res.status(404).json("no kindmanooy found")
    res.json(kindmanooys)
}

const createKindManooy = async (req, res) => {
    const { time, mannoyCost } = req.body
    if (!time ||!mannoyCost) return res.status(404).json("time and mannoyCost are requierd")
    const kindmanooys = await KindManooy.create({ time, mannoyCost })
    if (!kindmanooys) return res.status(404).json("Error while adding new kindmanooy")
    res.json(kindmanooys)
}

const updateKindManooy = async (req, res) => {
    const {time, mannoyCost,id } = req.body
    if (!time ||!mannoyCost||!id) return res.status(400).json("time,id , mannoyCost are requierd")
    const kindmanooy = await KindManooy.findById(id)
    kindmanooy.time = time
    kindmanooy.mannoyCost = mannoyCost
    const newKindManooy = await kindmanooy.save()
    const kindmanooys = await KindManooy.find()
    res.json(kindmanooys)
}

const deleteKindManooy = async (req, res) => {
    const { id } = req.params
    const kindmanooy = await KindManooy.findById(id)
    if (!kindmanooy) return res.status(400).json("no kindmanooy found")
    const result = await kindmanooy.deleteOne()
    // const reply = `KindManooy deleted`
    // res.json(reply)
    const kindmanooys = await KindManooy.find()
    res.json(kindmanooys)
}



module.exports ={ getAllKindManooys, getKindManooyById,createKindManooy,updateKindManooy,deleteKindManooy}