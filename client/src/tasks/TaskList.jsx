import Axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import TaskItem from "./TaskItem"
import {
    Container,
    Box,
    TextField,
    Card,
    CardContent,
    Typography,
    Grid,
    Button,
    CircularProgress,
    Chip,
    Stack,
    InputAdornment
} from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import SearchIcon from '@mui/icons-material/Search'

const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const [valueToSearch, setValueToSearch] = useState("")
    const [complete, setComplete] = useState(false)
    const fechData = async () => {
        const { data } = await Axios.get("http://localhost:7002/api/tasks/")
        setTasks(data)
    }
    useEffect(() => {
        fechData()

    }, [])
    const filteredTasks = tasks.filter(t => String(t.title).includes(valueToSearch))


    if (tasks.length === 0) {
        return (<Container maxWidth="sm" sx={{ mt: 8, textAlign: 'center' }}>
            <CircularProgress sx={{ mb: 3 }} />
            <Typography variant="h5" gutterBottom>
                Loading tasks...
            </Typography>
            <Button
                component={Link}
                to="/tasks/add"
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                sx={{ mt: 2 }}
            >
                Add New Task
            </Button>
        </Container>)
    }
    return (<Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                Task Manager
            </Typography>

            <TextField
                fullWidth
                variant="outlined"
                placeholder="Search tasks..."
                onChange={(e) => { setValueToSearch(e.target.value) }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />

            <Grid container spacing={3}>
                {filteredTasks.map((task, index) => {
                    return (
                        <Grid item xs={12} sm={6} key={task._id || index}>
                            <Card elevation={2} sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                borderLeft: task.complete ? '6px solid #4caf50' : '6px solid #ff9800'
                            }}>
                                <CardContent>
                                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        {task.title}
                                    </Typography>

                                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                                        {task.tags && (
                                            <Chip label={task.tags} size="small" color="primary" variant="outlined" />
                                        )}
                                        <Chip
                                            label={task.complete ? "Completed" : "Pending"}
                                            size="small"
                                            color={task.complete ? "success" : "warning"}
                                        />
                                    </Stack>

                                    <TaskItem task={task} setTasks={setTasks} />
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button
                    component={Link}
                    to="/tasks/add"
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<AddIcon />}
                >
                    Add New Task
                </Button>
            </Box>
        </Box>
    </Container>)
}
export default TaskList