import React, { Component } from "react"
import Link from "react-router-dom/Link";

const OneSinglePost = (props) => {
    const title = props.post.title;
    const body = props.post.body;
    const userId = props.post.userId;
    const id= props.post.id;

    return (
        <div class="row">
        <div class="col s12">
          <div class="card #eeeeee grey lighten-3">
            <div class="card-content white-text">
              <h1 class="card-title">{title} </h1>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>        
    )
}

