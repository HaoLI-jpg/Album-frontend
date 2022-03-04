import React, {useState, useEffect} from "react";
import api from '../../../api/index'

import Post from './Post/Post'

const Posts= () => {

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

    if (!posts.length) return "loading"

    return(
        <>
            <p> Posts </p>
            <p>{posts[0].message}</p>
            <p>{posts[0].creator}</p>

            <Post />
        </>
        
    )
}

export default Posts;