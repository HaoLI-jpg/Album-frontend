import React from "react";
import { AppBar,Toolbar, Typography, IconButton} from '@material-ui/core';
import useStyles from './style';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
const Navbar = () => {
    const classes = useStyles();

    return(
        <AppBar position="static">
            <Toolbar>
                <PhotoLibraryIcon />
                <Typography variant="h6" className={classes.title} noWrap>
                    Album
                </Typography>
                <div  className={classes.icons} />
                <div>
                    <IconButton color="inherit" href="/">
                        <PhotoAlbumIcon  />
                    </IconButton>
                    <IconButton color="inherit" href="/upload">
                        <AddToPhotosIcon  />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;