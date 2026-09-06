const express = require("express")
const router = express.Router()
const Task = require("../models/Task");
const taskController=require("../controllers/taskController")
// app.use(express.json())
router.get("/",taskController.getAllTasks)
router.get("/:id",taskController.getTaskById)
router.post("/",taskController.createTask)
router.put("/",taskController.updateTask)
router.put("/complete",taskController.updateTask2)
router.delete("/:id",taskController.deleteTask)


module.exports = router