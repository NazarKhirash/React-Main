import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import {apiService} from "../../servisec/users.service";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        apiService.getPostId(userId)
            .then(post=>{setPosts(post)})
    }, [userId])
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;