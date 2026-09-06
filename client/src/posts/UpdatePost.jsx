import Axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// יבוא רכיבי MUI
import { 
    Box, 
    TextField, 
    Button, 
    Stack, 
    Typography, 
    InputAdornment 
} from "@mui/material"

// יבוא אייקונים מתאימים
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import TitleIcon from '@mui/icons-material/Title'
import DescriptionIcon from '@mui/icons-material/Description'


const UpdatePost = ({ post,setPosts,setT}) => {
    const [title, setTitle] = useState(post.title)
    const [body, setBody] = useState(post.body)
    const id = post._id
    
    const navigate = useNavigate()
    const submitForm = async (e) => {
        e.preventDefault()
        const { data } = await Axios.put("http://localhost:7002/api/posts", { id, title, body })
        setTitle("")
        setBody("")
        setPosts(data)
        navigate("/posts")
        setT(false)
    }
    return (    <Box
            component="form"
            onSubmit={submitForm}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5,
                mt: 2,
                p: 3,
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)', // צללית עדינה ומודרנית
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                    boxShadow: '0px 6px 24px rgba(0, 0, 0, 0.08)',
                }
            }}
        >
            {/* כותרת הטופס */}
            <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                UPDATE POST
            </Typography>

            {/* שדה כותרת הפוסט (Title) */}
            <TextField
                label="Title"
                size="small"
                value={title}
                placeholder="Please Add Title"
                required={true}
                onChange={(e) => { setTitle(e.target.value) }}
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <TitleIcon color="action" fontSize="small" />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                    }
                }}
            />

            {/* שדה גוף הפוסט (Body) - שודרג ל-Multiline (רב-שורות) להתאמה לפוסטים */}
            <TextField
                label="Body"
                size="small"
                value={body}
                placeholder="What the tag?"
                onChange={(e) => { setBody(e.target.value) }}
                fullWidth
                multiline
                rows={4} // מאפשר כתיבה נוחה של פוסט ארוך
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 0.5 }}>
                            <DescriptionIcon color="action" fontSize="small" />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                    }
                }}
            />

            {/* כפתורי הפעולה בתחתית הטופס */}
            <Stack direction="row" spacing={1.5} justifyContent="flex-end" sx={{ mt: 1 }}>
                {/* כפתור ביטול (Cancel) לסגירת הטופס */}
                <Button 
                    variant="outlined" 
                    size="medium" 
                    color="inherit" 
                    startIcon={<CancelIcon />}
                    onClick={() => setT(false)}
                    sx={{
                        borderRadius: '8px',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        px: 2.5
                    }}
                >
                    Cancel
                </Button>

                {/* כפתור שליחה (Send) */}
                <Button
                    disabled={title === ""}
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="medium"
                    startIcon={<SaveIcon />}
                    sx={{
                        borderRadius: '8px',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        px: 3,
                        boxShadow: 'none',
                        '&:hover': {
                            boxShadow: '0px 2px 8px rgba(25, 118, 210, 0.3)'
                        }
                    }}
                >
                    Send
                </Button>
            </Stack>
        </Box>)
}
export default UpdatePost