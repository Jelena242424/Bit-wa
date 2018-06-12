import React, { Component, Fragment } from 'react';
import { SingleAuthor } from "./SingleAuthor";
import Link from "react-router-dom/Link";
import { AuthorNameSurname } from "./AuthorNameSurname";
import { AuthorAddress } from './AuthorAddress';
import { AuthorCompany } from './AuthorCompany';


const AboutSingleAuthor = (props) => {

    return (
        <Fragment>
            <div className="row">
                <div className="col s12 valign-wrapper">
                    <div className="col s3">
                        <div className="#e65100 orange darken-4 btn"><Link to="/Authors" className="white-text">All Authors</Link></div>
                    </div>
                    <div className="col s9">
                        <h3 className="center">{props.author.name}</h3>
                    </div>
                </div>
            </div>
            <AuthorNameSurname author={props.author} />
            <AuthorAddress author={props.author} />
            <AuthorCompany author={props.author} />
        </Fragment>
    )
};

export { AboutSingleAuthor }

