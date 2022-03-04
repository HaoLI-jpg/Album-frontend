import { CircularProgress, Grid } from "@material-ui/core";
import React, {useState, useEffect} from "react";
import api from '../../api/index'
import useStyles from './style'
import Post from './Post/Post'

const Posts= () => {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get('/posts');
                setPosts(response.data);
            } catch (error) {
                console.log(error.response.data)
            }
        }
        fetchPosts();
    }, [])

    return(
        !posts.length ? <CircularProgress className={classes.loading}/> : (
            <Grid className={classes.container} alignment="center" container alignItems="flex-start" spacing={3} direction="column">
                {posts.map((post)=>(
                    <Grid alignment="center" key={post._id} item xs={12} sm={6}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts;