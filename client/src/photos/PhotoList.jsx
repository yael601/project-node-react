import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PhotoItem from "../photos/PhotoItem";

// יבוא רכיבי MUI
import {
    Container,
    Box,
    TextField,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    CircularProgress,
    InputAdornment
} from "@mui/material";

// יבוא אייקונים של MUI
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
// import images from "../images/כלי בית/"

const PhotoList = () => {
    const [photos, setPhotos] = useState([])
    const [valueToSearch, setValueToSearch] = useState("")
    const fechData = async () => {
        const { data } = await Axios.get("http://localhost:7002/api/photos/")
        setPhotos(data)
    }
    useEffect(() => {
        fechData()

    }, [])
    const filteredPhotos = photos.filter(t => String(t.title).includes(valueToSearch))


    if (photos.length === 0) {
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
                Loading photos...
            </Typography>
            <Button
                component={Link}
                to="/photos/add"
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
            >
                Add New Photo
            </Button>
        </Box>
        )
    }
    return (<Container maxWidth="lg" sx={{ py: 4 }}>
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
                placeholder="Search photos..."
                variant="outlined"
                size="small"
                value={valueToSearch}
                onChange={(e) => setValueToSearch(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon color="action" />
                        </InputAdornment>
                    ),
                }}
                sx={{ width: { xs: '100%', sm: '300px' } }}
            />

            <Button
                component={Link}
                to="/photos/add"
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                sx={{ width: { xs: '100%', sm: 'auto' } }}
            >
                Add New Photo
            </Button>
        </Box>

        {/* גריד התמונות */}
        <Grid container spacing={3}>
            {filteredPhotos.map((photo, index) => (
                <Grid item xs={12} sm={6} md={4} key={photo._id || index}>
                    <Card
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: 3,
                            borderRadius: 2,
                            transition: 'transform 0.2s',
                            '&:hover': {
                                transform: 'scale(1.02)',
                                boxShadow: 6
                            }
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="220"
                            image={photo.imageUrl}
                            alt={photo.title}
                            sx={{ objectFit: 'cover' }}
                        />
                        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="h2"
                                noWrap
                                sx={{ fontWeight: 'bold' }}
                            >
                                {photo.title}
                            </Typography>

                            {/* קומפוננטת הפעולות המקורית שלך */}
                            <Box mt={2} pt={2} sx={{ borderTop: '1px solid #eee' }}>
                                <PhotoItem photo={photo} setPhotos={setPhotos} />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Container>
    );
};


export default PhotoList