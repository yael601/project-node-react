import Axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { 
    Container, 
    Box, 
    TextField, 
    Button, 
    Typography, 
    Paper, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem 
} from "@mui/material"
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'


const AddPhoto = () => {
    const [title, setTitle] = useState("")
    const [imageUrl, setimageUrl] = useState("")
    const navigate = useNavigate()
    const submitForm = async (e) => {
        e.preventDefault()
        const { data } = await Axios.post("http://localhost:7002/api/photos", { title, imageUrl })
        setTitle("")
        setimageUrl("")
        navigate("/photos")
    }
    const Cange = (num) => {
        setimageUrl(num.target.value)
    }
    return (<Container maxWidth="sm" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 3 }}>
                Add New Photo
            </Typography>

            <Box component="form" onSubmit={submitForm} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {/* שדה כותרת התמונה */}
                <TextField
                    label="Photo Title"
                    variant="outlined"
                    value={title}
                    placeholder="Please Add Title"
                    required={true}
                    onChange={(e) => { setTitle(e.target.value) }}
                    fullWidth
                />

                {/* תיבת בחירה מעוצבת של MUI */}
                <FormControl fullWidth>
                    <InputLabel id="image-select-label">Select Image</InputLabel>
                    <Select
                        labelId="image-select-label"
                        value={imageUrl}
                        label="Select Image"
                        onChange={(e) => { setimageUrl(e.target.value) }}
                    >
                        <MenuItem value="src\images\כלי בית\1.png">Image 1</MenuItem>
                        <MenuItem value="src\images\כלי בית\2.webp">Image 2</MenuItem>
                        <MenuItem value="src\images\כלי בית\3.jpg">Image 3</MenuItem>
                        <MenuItem value="src\images\כלי בית\4.jpg">Image 4</MenuItem>
                        <MenuItem value="src\images\כלי בית\5.webp">Image 5</MenuItem>
                        <MenuItem value="src\images\כלי בית\6.jpg">Image 6</MenuItem>
                        <MenuItem value="src\images\כלי בית\7.png">Image 7</MenuItem>
                        <MenuItem value="src\images\כלי בית\8.jpg">Image 8</MenuItem>
                        <MenuItem value="src\images\כלי בית\9.webp">Image 9</MenuItem>
                        <MenuItem value="src\images\כלי בית\10.jpg">Image 10</MenuItem>
                        <MenuItem value="src\images\כלי בית\11.webp">Image 11</MenuItem>
                        <MenuItem value="src\images\כלי בית\12.jpg">Image 12</MenuItem>
                    </Select>
                </FormControl>

                {/* כפתור שליחה מעוצב עם אייקון מצלמה */}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={title === ""}
                    startIcon={<PhotoCameraIcon />}
                    sx={{ mt: 1 }}
                >
                    Send
                </Button>
            </Box>
        </Paper>
    </Container>)
}
export default AddPhoto