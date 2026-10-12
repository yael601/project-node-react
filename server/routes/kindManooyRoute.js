const express = require("express")
const router = express.Router()
const KindManooy = require("../models/kindmanooys");
const kindmanooyController=require("../controllers/kindmanooysController")
// app.use(express.json())
const verifyJWT = require("../middleware/verifyJWT")
router.get("/",kindmanooyController.getAllKindManooys)
router.get("/:id",kindmanooyController.getKindManooyById)
router.post("/",kindmanooyController.createKindManooy)
router.put("/",kindmanooyController.updateKindManooy)
router.delete("/:id",kindmanooyController.deleteKindManooy)


module.exports = router
