import React from 'react';
import {Link} from "react-router-dom";

const Button = ({to, state, children, ...props}) => {
    return (
        <div>
            <Link to={to} state={state} {...props}>
                <button>{children}</button>
            </Link>
        </div>
    );
};

export {Button};