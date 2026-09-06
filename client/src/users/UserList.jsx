import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserItem from "./UserItem";

// יבוא רכיבי MUI
import {
  Container,
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  InputAdornment,
  Divider
} from "@mui/material";

// יבוא אייקונים של MUI
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";

const UserList = () => {
    const [users, setUsers] = useState([])
    const [valueToSearch, setValueToSearch] = useState("")


    const fechData = async () => {
        const { data } = await Axios.get("http://localhost:7002/api/users/")
        setUsers(data)
    }
    useEffect(() => {
        fechData()

    }, [])
    const [sort, setSort] = useState("1")
    let sortedBy = []
    const byName = users.filter(t => String(t.name).includes(valueToSearch))
    const byUserName = users.filter(t => String(t.userName).includes(valueToSearch))
    const byEmail = users.filter(t => String(t.email).includes(valueToSearch))
    const byPhone = users.filter(t => String(t.phone).includes(valueToSearch))


    if (users.length === 0) {
        return(      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="60vh"
        gap={3}
      >
        <CircularProgress size={60} thickness={4} />
        <Typography variant="h6" color="textSecondary">
          Loading users...
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/users/add"
          startIcon={<AddIcon />}
        >
          Add New User
        </Button>
      </Box>
)
    }
    if (sort === "1") {
        sortedBy = byName
    }
    if (sort === "2")
        sortedBy = byUserName
    if (sort === "3")
        sortedBy = byEmail
    if (sort === "4")
        sortedBy = byPhone


        return (    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* אזור פילטרים וחיפוש */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mb: 4,
          alignItems: "center",
        }}
      >
        <TextField
          fullWidth
          label="Search Users"
          variant="outlined"
          type="search"
          value={valueToSearch}
          onChange={(e) => setValueToSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <FormControl fullWidth sx={{ minWidth: { sm: 240 } }}>
          <InputLabel id="sort-select-label">Sort By</InputLabel>
          <Select
            labelId="sort-select-label"
            value={sort}
            label="Sort By"
            onChange={(e) => setSort(String(e.target.value))}
          >
            <MenuItem value="1">Sorted by Name</MenuItem>
            <MenuItem value="2">Sorted by Username</MenuItem>
            <MenuItem value="3">Sorted by Email</MenuItem>
            <MenuItem value="4">Sorted by Phone</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* גריד כרטיסיות המשתמשים */}
      <Grid container spacing={3}>
        {sortedBy.map((user, index) => (
          <Grid item xs={12} sm={6} md={4} key={user._id || index}>
            <Card
              elevation={3}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 2,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
                  {user.name}
                </Typography>
                <Divider sx={{ my: 1.5 }} />
                
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <PersonIcon fontSize="small" color="action" />
                  <Typography variant="body2" color="text.secondary">
                    <strong>Username:</strong> {user.userName}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <EmailIcon fontSize="small" color="action" />
                  <Typography variant="body2" color="text.secondary" noWrap>
                    <strong>Email:</strong> {user.email}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <HomeIcon fontSize="small" color="action" />
                  <Typography variant="body2" color="text.secondary">
                    <strong>Address:</strong> {user.address}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <PhoneIcon fontSize="small" color="action" />
                  <Typography variant="body2" color="text.secondary">
                    <strong>Phone:</strong> {user.phone}
                  </Typography>
                </Box>
              </CardContent>

              {/* רכיב הפעולות המקורי */}
              <Box sx={{ p: 2, pt: 0 }}>
                <UserItem user={user} setUsers={setUsers} />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* כפתור הוספת משתמש בתחתית העמוד */}
      <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          component={Link}
          to="/users/add"
          startIcon={<AddIcon />}
          sx={{ px: 4, py: 1.5, borderRadius: 3, fontWeight: "bold" }}
        >
          Add New User
        </Button>
      </Box>
    </Container>
)
}
export default UserList