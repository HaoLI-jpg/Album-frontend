import React, {useState, useEffect} from "react";
import api from '../../api/index';
import Posts from './Posts/Posts'

const Home = () => {

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
            <p>{posts[0].message}</p>
            <Posts />
        </>
        
    )
}

export default Home;