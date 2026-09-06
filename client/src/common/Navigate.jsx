import { NavLink } from "react-router-dom"
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';

const Navigate = () => {

    return <>
        <div className="nav">
            <Stack direction="row" spacing={2}>
            {/* <Button variant="contained" href="#contained-buttons">Link</Button> */}
             <Button variant="contained" to="/"href="/">Home Page</Button>
            <Button variant="contained" to="/tasks"href="/tasks">Task list</Button>
            <Button variant="contained" to="/posts"href="/posts">Post list</Button>
            <Button variant="contained" to="/photos"href="/photos">albums</Button>
            <Button variant="contained" to="/users"href="/users">users</Button>
                </Stack>

        </div>

    </>
}
export default Navigate