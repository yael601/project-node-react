import Axios from "axios";
import { useState } from "react";
import UpdatePost from "./UpdatePost";
import { Button, Stack, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const PostItem = ({ post, setPosts }) => {

    const [t, setT] = useState(false)

    const deletePost = async (e) => {
        e.preventDefault()
        const { data } = await Axios.delete(`http://localhost:7002/api/posts/${post._id}`)
        setPosts(data)
    }



    return (<Box sx={{ my: 2 }}>
        {!t && (
            <Stack direction="row" spacing={2}>
                <Button
                    variant="contained"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={deletePost}
                >
                    Delete
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<EditIcon />}
                    onClick={() => setT(!t)}
                >
                    Update
                </Button>
            </Stack>
        )}
        {t && <UpdatePost post={post} setPosts={setPosts} setT={setT} />}
    </Box>)

}
export default PostItem