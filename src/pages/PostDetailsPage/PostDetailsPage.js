import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {apiService} from "../../services/user.service";
import PostDetails from "../../components/PostDetails/PostDetails";

const PostDetailsPage = () => {
    const {id} = useParams()
    const {state} = useLocation()
    const [post, setPost] = useState(null)

    useEffect(() => {
        if (!post) {
            apiService.getPostById(id).then(value => setPost(value))
            return
        }
        setPost(state)
    }, [id])
    return (
        <div>
            {post && <PostDetails post={post}/>}
            <Outlet/>
        </div>
    );
};

export default PostDetailsPage;