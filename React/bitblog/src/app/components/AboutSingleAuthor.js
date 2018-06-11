import React, { Component, Fragment } from 'react';
import { SingleAuthor } from "./SingleAuthor";
import Link from "react-router-dom/Link";
import { AuthorNameSurname } from "./AuthorNameSurname";
import { AuthorAddress } from './AuthorAddress';
import { AuthorCompany } from './AuthorCompany';


const AboutSingleAuthor = () => {

    return (
        <Fragment>
            <span className="#e65100 orange darken-4 btn"><Link to="/Authors">All Authors</Link></span>
            <h2 className="center">Single Author</h2>
            <AuthorNameSurname />
            <AuthorAddress />
            <AuthorCompany />
        </Fragment>
    )
};

export { AboutSingleAuthor }

