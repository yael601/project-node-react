import Axios from "axios"
import { useState } from "react"
import UpdatePhoto from "./UpdatePhoto"

// יבוא רכיבי MUI
import { Box, Button } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
const PhotoItem = ({ photo, setPhotos }) => {

    const [t, setT] = useState(false)
    const deletePhoto = async (e) => {
        e.preventDefault()
        const { data } = await Axios.delete(`http://localhost:7002/api/photos/${photo._id}`)
        setPhotos(data)
    }



    return (<>
        {/* מציג את הכפתורים רק כאשר t הוא false */}
        {!t && (
            <Box
                display="flex"
                gap={1.5}
                width="100%"
                mt={2}
            >
                {/* כפתור מחיקה מעוצב */}
                <Button
                    variant="contained"
                    color="error"
                    size="small"
                    startIcon={<DeleteIcon />}
                    onClick={deletePhoto}
                    fullWidth
                    sx={{
                        textTransform: 'none',
                        fontWeight: 'bold',
                        borderRadius: '6px',
                        boxShadow: 'none',
                        '&:hover': {
                            backgroundColor: '#d32f2f',
                            boxShadow: '0px 2px 4px rgba(0,0,0,0.15)'
                        }
                    }}
                >
                    Delete
                </Button>

                {/* כפתור עדכון מעוצב */}
                <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    startIcon={<EditIcon />}
                    onClick={() => { setT(!t) }}
                    fullWidth
                    sx={{
                        textTransform: 'none',
                        fontWeight: 'bold',
                        borderRadius: '6px',
                        borderWidth: '1.5px',
                        '&:hover': {
                            borderWidth: '1.5px',
                            backgroundColor: 'rgba(25, 118, 210, 0.04)'
                        }
                    }}
                >
                    Update
                </Button>
            </Box>
        )}

        {/* מציג את קומפוננטת העדכון כאשר t הוא true */}
        {t && <UpdatePhoto photo={photo} setPhotos={setPhotos} setT={setT} />}
    </>)

}
export default PhotoItem