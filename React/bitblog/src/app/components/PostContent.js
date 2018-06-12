import React, { Fragment, Component } from "react"
import { AuthorName } from "./AuthorName"
import { singlePostService } from "../../services/singlePostService";

export class PostContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <h2 className="center">{this.props.title}</h2>
                <AuthorName name={this.props.name} userId={this.props.userId}/>
                <p>{this.props.body}</p>
            </Fragment>
        );
    };

};



