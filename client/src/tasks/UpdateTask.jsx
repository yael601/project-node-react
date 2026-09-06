import Axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button'
import { Box, TextField, Stack } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save'


const UpdateTask = ({ task, setTasks, setT }) => {
    const [title, setTitle] = useState(task.title)
    const [tags, setTags] = useState(task.tags)
    const id = task._id

    const navigate = useNavigate()
    const submitForm = async (e) => {
        e.preventDefault()
        const { data } = await Axios.put("http://localhost:7002/api/tasks", { id, title, tags })
        setTitle("")
        setTags("")
        setTasks(data)
        navigate("/tasks")
        setT(false)
    }
    return (<Box
        component="form"
        onSubmit={submitForm}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mt: 2,
            p: 2,
            border: '1px solid #e0e0e0',
            borderRadius: 2,
            bgcolor: '#fafafa'
        }}
    >
        <TextField
            label="Title"
            size="small"
            value={title}
            placeholder="Please Add Title"
            required={true}
            onChange={(e) => { setTitle(e.target.value) }}
            fullWidth
        />
        <TextField
            label="Tags"
            size="small"
            value={tags}
            placeholder="What the tag?"
            onChange={(e) => { setTags(e.target.value) }}
            fullWidth
        />
        <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ mt: 1 }}>
            <Button
                disabled={title === ""}
                type="submit"
                variant="contained"
                color="primary"
                size="small"
                startIcon={<SaveIcon />}
            >
                Send
            </Button>
            {/* שמירה על כפתור ה-MUI המקורי מהקוד שלך */}
            <Button variant="contained" size="small" color="inherit" onClick={() => setT(false)}>
                Cancel
            </Button>
        </Stack>
    </Box>)
}
export default UpdateTask