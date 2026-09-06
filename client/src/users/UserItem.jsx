import Axios from "axios";
import { useState } from "react";
import UpdateUser from "./UpdateUser";

// יבוא רכיבים ואייקונים מ-MUI
import { Button, Stack, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const UserItem = ({ user, setUsers }) => {

    const [t,setT]=useState(false)
   
       const deleteUser = async (e) => {
        e.preventDefault()
        const { data } = await Axios.delete(`http://localhost:7002/api/users/${user._id}`)
        setUsers(data)
    }
    
    
    
    return (  <Box sx={{ width: "100%", mt: 1 }}>
      {!t && (
        <Stack direction="row" spacing={1.5} justifyContent="space-between" width="100%">
          <Button
            variant="outlined"
            color="error"
            size="small"
            startIcon={<DeleteIcon />}
            onClick={deleteUser}
            fullWidth
            sx={{
              borderRadius: 1.5,
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Delete
          </Button>
          
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<EditIcon />}
            onClick={() => setT(!t)}
            fullWidth
            sx={{
              borderRadius: 1.5,
              textTransform: "none",
              fontWeight: "bold",
              boxShadow: "none",
              "&:hover": {
                boxShadow: "none",
              },
            }}
          >
            Update
          </Button>
        </Stack>
      )}
      
      {t && (
        <Box sx={{ mt: 1 }}>
          <UpdateUser user={user} setUsers={setUsers} setT={setT} />
        </Box>
      )}
    </Box>)

}
export default UserItem