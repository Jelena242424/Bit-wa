import React, { Component } from "react"
import Link from "react-router-dom/Link";
import { AuthorName } from "./AuthorName";
import { PostContent } from "./PostContent"
import { RelatedPosts } from "./RelatedPosts";
import { postService } from "../../services/postService"

export class SinglePostDetail extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card #eeeeee grey lighten-3">
            <div className="card-content black-text">
              <PostContent id={this.props.post.id} name={this.props.name} body={this.props.post.body} title={this.props.post.title} userId={this.props.post.userId}/>
            </div>
            <hr />
            <div className="card-action">
              <RelatedPosts authorPosts={this.props.authorPosts} id={this.props.post.id} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


