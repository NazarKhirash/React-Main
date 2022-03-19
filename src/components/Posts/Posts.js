import React, {useEffect, useState} from 'react';
import {apiService} from "../../services/users.services";
import "../Users/users.css"

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        apiService.getPosts(userId)
            .then(posts => setPosts(posts))
    }, [userId])
    return (
        <div className='wrap_posts'>
            {posts.map(post => <div className='posts' key={post.id}> {post.id} - {post.title}
                <br/>{post.body}</div>)}
        </div>
    );
};

export default Posts;