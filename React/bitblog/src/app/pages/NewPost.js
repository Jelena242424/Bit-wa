import React, { Component } from "react";
import {CreateNewPost} from "../components/CreateNewPost";

export class NewPost extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CreateNewPost />
        )
    }
}
