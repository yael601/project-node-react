import Axios from "axios"
import { useState } from "react"
import UpdateTask from "./UpdateTask"
import { Button, Stack } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
const TaskItem = ({ task, setTasks }) => {

    const [t,setT]=useState(false)
    const [status,setStatus]=useState(task.complete)
       const deleteTask = async (e) => {
        e.preventDefault()
        const { data } = await Axios.delete(`http://localhost:7002/api/tasks/${task._id}`)
        setTasks(data)
    }
    const completeTask = async (e) => {
        e.preventDefault()
        const { data } = await Axios.put(`http://localhost:7002/api/tasks/complete`,{id:task._id})
        setTasks(data)
    }
    
    
    return (<Stack spacing={1} sx={{ mt: 2 }}>
            {!t && (
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    <Button 
                        variant="outlined" 
                        color="error" 
                        size="small" 
                        startIcon={<DeleteIcon />} 
                        onClick={deleteTask}
                    >
                        Delete
                    </Button>
                    <Button 
                        variant="outlined" 
                        color="primary" 
                        size="small" 
                        startIcon={<EditIcon />} 
                        onClick={() => { setT(!t) }}
                    >
                        Update
                    </Button>
                    <Button 
                        variant="contained" 
                        color="success" 
                        size="small" 
                        startIcon={<CheckCircleIcon />} 
                        onClick={completeTask}
                    >
                        Complete
                    </Button>
                </Stack>
            )}
            {t && <UpdateTask task={task} setTasks={setTasks} setT={setT} />}
        </Stack>)

}
export default TaskItem