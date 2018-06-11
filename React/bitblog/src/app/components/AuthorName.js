import React, { Fragment, Component } from "react"
import Link from "react-router-dom/Link";
import { authorsService } from "../../services/authorsService";

export class AuthorName extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h5 className="center" > <Link to="/AuthorDetails"> {this.props.name}</Link></h5>
        )
    }
};