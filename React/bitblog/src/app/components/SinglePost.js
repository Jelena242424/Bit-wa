import React, { Component } from "react"
import Link from "react-router-dom/Link";

const SinglePost = (props) => {
    const title = props.post.title;
    const body = props.post.body;
    const bodyShort = props.post.hideBody();
    const userId = props.post.userId;
    const id= props.post.id;

    return (
        <div className="row">
            <div className="col s12">
                <div className="card #eeeeee grey lighten-3">
                    <div className="card-content black-text">
                        <span className="card-title"><Link to={`/PostDetails`}> {title} </Link></span>
                        <p>{bodyShort}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {SinglePost};
