import Axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Box, TextField, Button, Typography, Paper } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save'

const AddTask = () => {
    const [title, setTitle] = useState("")
    const [tags, setTags] = useState("")
    const navigate = useNavigate()
    
    const submitForm = async (e) => {
        e.preventDefault()
        const { data } = await Axios.post("http://localhost:7002/api/tasks", { title, tags })
        setTitle("")
        setTags("")
        navigate("/tasks")
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Typography variant="h5" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
                    Add New Task
                </Typography>
                <Box component="form" onSubmit={submitForm} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Title"
                        variant="outlined"
                        value={title}
                        placeholder="Please Add Title"
                        required={true}
                        onChange={(e) => { setTitle(e.target.value) }}
                        fullWidth
                    />
                    <TextField
                        label="Tags"
                        variant="outlined"
                        value={tags}
                        placeholder="What the tag?"
                        onChange={(e) => { setTags(e.target.value) }}
                        fullWidth
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        disabled={title === ""}
                        startIcon={<SaveIcon />}
                        sx={{ mt: 2 }}
                    >
                        Send
                    </Button>
                </Box>
            </Paper>
        </Container>
    )
}

export default AddTask