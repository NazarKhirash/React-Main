import React from 'react';

import css from "./Post.module.css"
import {Button} from "../Button/Button";

const Post = ({post}) => {
    const {userId, id, title, body} = post
    return (

            <div className={css.post_div}>
                <h2>UserID:{userId} - ID: {id}</h2>
                <div>Title: {title}</div>
                <div>Body: {body}</div>
                <Button to={`${id}`} state={post}>Details</Button>
            </div>
    );
};

export default Post;