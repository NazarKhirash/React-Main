import React, {useEffect, useState} from 'react';

import css from "./PostPage.module.css"
import {apiService} from "../../services/user.service";
import Post from "../../components/Post/Post";
import {Outlet} from "react-router-dom";


const PostPage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        apiService.getAllPosts()
            .then(value => setPosts([...value]))
    }, [])
    return (
        <div className={css.post_page}>
            <div className={css.post_page_div}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div className={css.post_page_det}>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostPage;