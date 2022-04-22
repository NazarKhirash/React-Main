import React from 'react';

import css from "./PostDetails.module.css"
import {Button} from "../Button/Button";

const PostDetails = ({post}) => {
    const {userId, id, title, body} = post
    return (
        <div className={css.post_details_div}>
            <div>UserId: {userId}</div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            <Button to={'comments'}>Comments</Button>
        </div>
    );
};

export default PostDetails;