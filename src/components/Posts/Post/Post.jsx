import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@material-ui/core';

const Post= ( {post} ) => {
    return(
        <Card container>
            <CardMedia component="img" image={post.selectedFile || '../../../../assets/hexagon-structure-3g-1633279.jpeg'} title="Contemplative Reptile"/>
            <CardContent>
                <Typography variant="h5">{post.title}</Typography>

                <Box>
                    <Typography variant="body1">{post.message}</Typography>
                </Box>

                <Box display="flex" justifyContent="space-between">
                    <Typography></Typography>
                    <Typography gutterBottom variant="body1">{post.creator}</Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Post;