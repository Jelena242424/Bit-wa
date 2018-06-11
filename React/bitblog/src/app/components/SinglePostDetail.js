import React, { Component } from "react"
import Link from "react-router-dom/Link";
import {AuthorName} from "./AuthorName";
import {PostContent} from "./PostContent"
import { RelatedPosts } from "./RelatedPosts";

const SinglePostDetail = (props) => {
    // const title = props.post.title;
    // const body = props.post.body;
    // const userId = props.post.userId;
    // const id= props.post.id;

    return (
        <div class="row">
        <div class="col s12">
          <div class="card #eeeeee grey lighten-3">
            <div class="card-content black-text">
              <PostContent/>
            </div>
            <hr />

            <div class="card-action">
            <RelatedPosts />
            </div>
          </div>
        </div>
      </div>        
    )
};

export {SinglePostDetail}

