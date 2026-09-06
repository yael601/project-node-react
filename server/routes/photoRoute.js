const express = require("express")
const router = express.Router()
const Photo = require("../models/Photos");
const photoController=require("../controllers/photosController")
// app.use(express.json())
router.get("/",photoController.getAllPhotos)
router.get("/:id",photoController.getPhotoById)
router.post("/",photoController.createPhoto)
router.put("/",photoController.updatePhoto)
router.delete("/:id",photoController.deletePhoto)


module.exports = router