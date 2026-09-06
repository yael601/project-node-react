const Photo = require("../models/Photos")

const getAllPhotos = async (req, res) => {
    const photos = await Photo.find()
    res.json(photos)
}

const getPhotoById = async (req, res) => {
    const { id } = req.params
    const photos = await Photo.findById(id)
    if (!photos) return res.status(404).json("no photo found")
    res.json(photos)
}

const createPhoto = async (req, res) => {
    const { title, imageUrl} = req.body
    if (!title ||!imageUrl) return res.status(404).json("title and imageUrl are requierd")
    const photos = await Photo.create({ title, imageUrl })
    if (!photos) return res.status(404).json("Error while adding new photo")
    res.json(photos)
}

const updatePhoto = async (req, res) => {
    const { id, title, imageUrl } = req.body
    if (!title ||!imageUrl|| !id) return res.status(400).json("title, imageUrl and id are requierd")
    const photo = await Photo.findById(id)
    photo.title = title
    photo.imageUrl = imageUrl
    const newPhoto = await photo.save()
    const photos = await Photo.find()
    res.json(photos)}

const deletePhoto = async (req, res) => {
    const { id } = req.params
    const photo = await Photo.findById(id)
    if (!photo) return res.status(400).json("no photo found")
    const result = await photo.deleteOne()
    // const reply = `Photo deleted`
    // res.json(reply)
    const photos = await Photo.find()
    res.json(photos)
}



module.exports ={ getAllPhotos, getPhotoById,createPhoto,updatePhoto,deletePhoto}