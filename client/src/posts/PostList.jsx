import Axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import PostItem from "./PostItem"

// יבוא רכיבי MUI
import {
    Container,
    Box,
    TextField,
    Card,
    CardContent,
    Typography,
    Button,
    CircularProgress,
    InputAdornment,
    Stack,
    Divider
} from "@mui/material"

// יבוא אייקונים של MUI
import SearchIcon from "@mui/icons-material/Search"
import AddIcon from "@mui/icons-material/Add"


const PostList = () => {
    const [posts, setPosts] = useState([])
    const [valueToSearch, setValueToSearch] = useState("")
    const [complete, setComplete] = useState(false)
    const fechData = async () => {
        const { data } = await Axios.get("http://localhost:7002/api/posts/")
        setPosts(data)
    }
    useEffect(() => {
        fechData()

    }, [])
    const filteredPosts = posts.filter(t => String(t.title).includes(valueToSearch))


    if (posts.length === 0) {
        return (<Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="60vh"
            gap={3}
        >
            <CircularProgress color="primary" size={60} />
            <Typography variant="h6" color="textSecondary">
                loading...
            </Typography>
            <Button
                component={Link}
                to="/posts/add"
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                sx={{ borderRadius: '8px', textTransform: 'none' }}
            >
                Add New Post
            </Button>
        </Box>)
    }
    return (<Container maxWidth="md" sx={{ py: 4 }}>
        {/* אזור עליון: חיפוש וכפתור הוספה */}
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={4}
            gap={2}
            flexDirection={{ xs: 'column', sm: 'row' }}
        >
            <TextField
                type="search"
                placeholder="Search posts..."
                variant="outlined"
                size="small"
                onChange={(e) => { setValueToSearch(e.target.value) }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon color="action" />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    width: { xs: '100%', sm: '300px' },
                    '& .MuiOutlinedInput-root': { borderRadius: '8px' }
                }}
            />

            <Button
                component={Link}
                to="/posts/add"
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                sx={{
                    width: { xs: '100%', sm: 'auto' },
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontWeight: 'bold'
                }}
            >
                Add New Post
            </Button>
        </Box>

        {/* רשימת הפוסטים במבנה Stack אנכי ומרווח */}
        <Stack spacing={3} className="postList">
            {filteredPosts.map((post, index) => (
                <Card
                    key={post._id || index}
                    sx={{
                        boxShadow: 2,
                        borderRadius: 3,
                        border: '1px solid',
                        borderColor: 'divider',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: 4
                        }
                    }}
                >
                    <CardContent sx={{ p: 3 }}>
                        {/* כותרת הפוסט */}
                        <Typography
                            variant="h5"
                            component="h2"
                            gutterBottom
                            sx={{ fontWeight: 'bold', color: 'primary.main' }}
                        >
                            {post.title}
                        </Typography>

                        {/* תוכן הפוסט */}
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ mb: 2, lineHeight: 1.6, whiteSpace: 'pre-line' }}
                        >
                            {post.body}
                        </Typography>

                        <Divider sx={{ my: 2 }} />

                        {/* קומפוננטת הפעולות (Update/Delete) */}
                        <Box display="flex" justifyContent="flex-end">
                            <PostItem post={post} setPosts={setPosts} />
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </Stack>

        {/* כפתור הוספה תחתון לשמירה על המבנה המקורי */}
        <Box display="flex" justifyContent="center" mt={5}>
            <Button
                component={Link}
                to="/posts/add"
                variant="outlined"
                color="primary"
                startIcon={<AddIcon />}
                sx={{ borderRadius: '8px', textTransform: 'none', fontWeight: 'bold' }}
            >
                Add New Post
            </Button>
        </Box>
    </Container>)
}
export default PostList