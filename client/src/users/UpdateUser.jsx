import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// יבוא רכיבים ואייקונים מ-MUI
import { TextField, Button, Box, Stack, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";


const UpdateUser = ({ user,setUsers,setT}) => {
    const [name, setName] = useState(user.name)
    const [username, setUserName] = useState(user.userName)
    const [email, setEmail] = useState(user.email)
    const [address, setAddress] = useState(user.address)
    const [phone, setPhone] = useState(user.phone)
    const id = user._id
    
    const navigate = useNavigate()
    const submitForm = async (e) => {
        e.preventDefault()
        const { data } = await Axios.put("http://localhost:7002/api/users", { id, name, userName:username,email,address,phone })
        setName("")
        setUserName("")
        setEmail("")
        setAddress("")
        setPhone("")
        setUsers(data)
        navigate("/users")
        setT(false)
    }
    return(    <Box
      component="form"
      onSubmit={submitForm}
      noValidate
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        bgcolor: "background.default",
        boxShadow: 1,
      }}
    >
      <Typography variant="subtitle2" color="primary" sx={{ fontWeight: "bold", mb: 0.5 }}>
        Edit User Profile
      </Typography>

      <TextField
        label="Name"
        size="small"
        variant="outlined"
        value={name}
        required
        fullWidth
        onChange={(e) => setName(e.target.value)}
        error={name === ""}
        helperText={name === "" ? "Name is required" : ""}
      />

      <TextField
        label="Username"
        size="small"
        variant="outlined"
        value={username}
        required
        fullWidth
        onChange={(e) => setUserName(e.target.value)}
        error={username === ""}
        helperText={username === "" ? "Username is required" : ""}
      />

      <TextField
        label="Email"
        type="email"
        size="small"
        variant="outlined"
        value={email}
        fullWidth
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        label="Address"
        size="small"
        variant="outlined"
        value={address}
        fullWidth
        onChange={(e) => setAddress(e.target.value)}
      />

      <TextField
        label="Phone"
        type="tel"
        size="small"
        variant="outlined"
        value={phone}
        fullWidth
        onChange={(e) => setPhone(e.target.value)}
      />

      <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ mt: 1 }}>
        {/* כפתור ביטול לחווית משתמש טובה יותר */}
        <Button
          variant="outlined"
          color="inherit"
          size="small"
          startIcon={<CancelIcon />}
          onClick={() => setT(false)}
          sx={{ textTransform: "none" }}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          variant="contained"
          color="success"
          size="small"
          disabled={name === "" || username === ""}
          startIcon={<SaveIcon />}
          sx={{ textTransform: "none" }}
        >
          Save
        </Button>
      </Stack>
    </Box>)
}
export default UpdateUser