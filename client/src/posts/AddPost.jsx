import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";


const AddPost = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const navigate = useNavigate()
    const submitForm = async (e) => {
        e.preventDefault()
        const { data } = await Axios.post("http://localhost:7002/api/posts", { title, body })
        setTitle("")
        setBody("")
        navigate("/posts")
    }
    return (<Paper elevation={3} sx={{ p: 4, maxWidth: 450, mx: "auto", mt: 4, borderRadius: 2 }}>
        <Typography variant="h5" component="h2" gutterBottom align="center" sx={{ fontWeight: "bold", mb: 3 }}>
            Add New Post
        </Typography>

        <Box
            component="form"
            onSubmit={submitForm}
            noValidate
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
            <TextField
                label="Title"
                variant="outlined"
                value={title}
                required
                fullWidth
                placeholder="Please Add Title"
                onChange={(e) => setTitle(e.target.value)}
                error={title === ""}
                helperText={title === "" ? "Title is required" : ""}
            />

            <TextField
                label="Body"
                variant="outlined"
                value={body}
                fullWidth
                multiline
                rows={4}
                placeholder="Enter body content..."
                onChange={(e) => setBody(e.target.value)}
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={title === ""}
                endIcon={<SendIcon />}
                fullWidth
                size="large"
                sx={{ py: 1.2 }}
            >
                Send
            </Button>
        </Box>
    </Paper>)


}
export default AddPost