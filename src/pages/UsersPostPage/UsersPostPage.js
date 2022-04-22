import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {apiService} from "../../services/user.service";
import PostOfUsers from "../../components/PostOfUsers/PostOfUsers";

const UsersPostPage = () => {
    const {id} = useParams()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        apiService.getUsersPostsId(id).then(value => setPosts(value))
    }, [])

    return (
        <div>
            {posts.map(post => <PostOfUsers key={post.id} post={post}/>)}
        </div>
    );
};

export default UsersPostPage;