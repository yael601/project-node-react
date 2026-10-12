const express = require("express")
const router = express.Router()
const Manager = require("../models/Managers");
const managerController=require("../controllers/managersController")
// app.use(express.json())
const verifyJWT = require("../middleware/verifyJWT")
router.get("/",managerController.getAllManagers)
router.get("/:id",managerController.getManagerById)
router.post("/",managerController.createManager)
router.put("/",managerController.updateManager)
router.delete("/:id",managerController.deleteManager)
module.exports = router