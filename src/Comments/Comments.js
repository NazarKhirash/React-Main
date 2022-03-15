import React from 'react';

import useGetComments from "./useGetComments";

const Comments = () => {
    const {data, fetching} = useGetComments()

    return (
        <div>
            {fetching && !data.length && <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>}
            {!fetching && !!data.length && data.map(comment => <div
                key={comment.id}>{comment.id} -- {comment.name} -- {comment.email} -- {comment.body}</div>)}
        </div>
    );
};

export default Comments;