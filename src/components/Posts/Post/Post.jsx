import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const Post= ( {post} ) => {
    return(
        <Card container>
            <CardMedia component="img" image={post.selectedFile || '../../../../assets/hexagon-structure-3g-1633279.jpeg'} title="Contemplative Reptile"/>
            <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="p6">{post.message}</Typography>
                <Typography>{post.creator}</Typography>
            </CardContent>
        </Card>
    )
}

export default Post;