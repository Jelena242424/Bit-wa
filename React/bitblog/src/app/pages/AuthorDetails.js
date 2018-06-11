import React, { Component } from "react"
import {AboutSingleAuthor} from '../components/AboutSingleAuthor'

export class AuthorDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
            <AboutSingleAuthor />
            </div>
        );
    };
};