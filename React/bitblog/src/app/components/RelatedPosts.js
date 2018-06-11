import React, { Fragment } from "react";
import Link from "react-router-dom/Link";

const RelatedPosts = () => {
    return (
        <Fragment>
        <h4>3 more posts from same author</h4>
        <p><Link to="/">Post Title</Link></p>
        <p><Link to="/">Post Title</Link></p>
        <p><Link to="/">Post Title</Link></p>
        </Fragment>
    )
};

export {RelatedPosts}