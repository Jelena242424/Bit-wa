import React, { Component, Fragment } from 'react';
import { SingleAuthor } from "./SingleAuthor";
import Link from "react-router-dom/Link";
import { AuthorNameSurname } from "./AuthorNameSurname";
import { AuthorAddress } from './AuthorAddress';
import { AuthorCompany } from './AuthorCompany';


const AboutSingleAuthor = () => {

    return (
        <Fragment>
            <span><Link to="/Authors">All Authors</Link></span>
            <h2 className="center">Single Author</h2>
            <AuthorNameSurname />
            <AuthorAddress />
            <AuthorCompany />
        </Fragment>
    )
};

export { AboutSingleAuthor }

