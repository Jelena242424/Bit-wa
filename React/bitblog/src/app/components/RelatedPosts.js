import React, { Fragment } from "react";
import Link from "react-router-dom/Link";

const RelatedPosts = (props) => {

    const renderPostList = () => {
        return props.authorPosts.map(post => {
            return <p><Link to="/">{post.title}</Link></p>
        });
    };
    return (
        <Fragment>
        <h4>3 more posts from same author</h4>
        {renderPostList()}
        </Fragment>
    )
};

export {RelatedPosts}