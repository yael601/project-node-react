import Axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { 
    Box, 
    TextField, 
    Button, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem, 
    Stack 
} from "@mui/material"
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'


const UpdatePhoto = ({ photo, setPhotos, setT }) => {
    const [title, setTitle] = useState(photo.title)
    const [imageUrl, setimageUrl] = useState(photo.imageUrl)
    const id = photo._id

    const navigate = useNavigate()
    const submitForm = async (e) => {
        e.preventDefault()
        const { data } = await Axios.put("http://localhost:7002/api/photos", { id, title, imageUrl })
        setTitle("")
        setimageUrl("")
        setPhotos(data)
        navigate("/photos")
        setT(false)
    }
    return(     <Box 
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
            {/* שדה כותרת מעוצב */}
            <TextField
                label="Update Title"
                size="small"
                variant="outlined"
                value={title}
                placeholder="Please Add Title"
                required={true}
                onChange={(e) => { setTitle(e.target.value) }}
                fullWidth
            />

            {/* תיבת בחירת תמונה מעוצבת */}
            <FormControl fullWidth size="small">
                <InputLabel id="update-image-select-label">Select Image</InputLabel>
                <Select
                    labelId="update-image-select-label"
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

            {/* כפתורי פעולה: שמירה וביטול */}
            <Stack direction="row" spacing={1} justifyContent="flex-end">
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="small"
                    disabled={title === ""}
                    startIcon={<SaveIcon />}
                >
                    Send
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    startIcon={<CancelIcon />}
                    onClick={() => setT(false)}
                >
                    Cancel
                </Button>
            </Stack>
        </Box>)
}
export default UpdatePhoto