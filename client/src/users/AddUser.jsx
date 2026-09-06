import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// יבוא רכיבים ואייקונים מ-MUI
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Alert,
  Stack
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SendIcon from "@mui/icons-material/Send";

const AddUser = () => {
    const [name, setName] = useState("")
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [uniqe, setUniqe] = useState(false)
    const navigate = useNavigate()
    const submitForm = async (e) => {
        e.preventDefault()

        const { data } = await Axios.post("http://localhost:7002/api/users", { name, userName: username, email, address, phone })
        console.log(data);



        if (String(data) === "userNume nust be uniqe!") {
            console.log("uuuuuuuuuuuu");
            setUniqe(!uniqe)



        }
        else {
            setName("")
            setUserName("")
            setEmail("")
            setAddress("")
            setPhone("")
            navigate("/users")
        }


    }
    return(   <Paper 
      elevation={3} 
      sx={{ 
        p: 4, 
        maxWidth: 500, 
        mx: "auto", 
        mt: 5, 
        borderRadius: 3 
      }}
    >
      <Stack alignItems="center" spacing={1} sx={{ mb: 3 }}>
        <PersonAddIcon color="primary" sx={{ fontSize: 40 }} />
        <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>
          Create New User
        </Typography>
      </Stack>

      <Box
        component="form"
        onSubmit={submitForm}
        noValidate
        sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
      >
        <TextField
          label="Full Name"
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
          variant="outlined"
          value={username}
          required
          fullWidth
          onChange={(e) => setUserName(e.target.value)}
          error={username === ""}
          helperText={username === "" ? "Username is required" : ""}
        />

        <TextField
          label="Email Address"
          type="email"
          variant="outlined"
          value={email}
          fullWidth
          placeholder="example@domain.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Address"
          variant="outlined"
          value={address}
          fullWidth
          onChange={(e) => setAddress(e.target.value)}
        />

        <TextField
          label="Phone Number"
          type="tel"
          variant="outlined"
          value={phone}
          fullWidth
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* הצגת שגיאה מעוצבת במידה והשם משתמש אינו ייחודי */}
        {uniqe && (
          <Alert severity="error" variant="filled" sx={{ borderRadius: 2 }}>
            Username must be unique! Please try another one.
          </Alert>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={name === ""}
          endIcon={<SendIcon />}
          fullWidth
          size="large"
          sx={{ 
            py: 1.5, 
            borderRadius: 2, 
            fontWeight: "bold",
            textTransform: "none",
            fontSize: "1rem"
          }}
        >
          Register User
        </Button>
      </Box>
    </Paper>)
}
export default AddUser