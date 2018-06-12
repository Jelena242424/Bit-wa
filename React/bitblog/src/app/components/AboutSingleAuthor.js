import React, { Component, Fragment } from 'react';
import { SingleAuthor } from "./SingleAuthor";
import Link from "react-router-dom/Link";
import { AuthorNameSurname } from "./AuthorNameSurname";
import { AuthorAddress } from './AuthorAddress';
import { AuthorCompany } from './AuthorCompany';


const AboutSingleAuthor = (props) => {

    return (
        <Fragment>
            <span className="#e65100 orange darken-4 btn"><Link to="/Authors">All Authors</Link></span>
            <h2 className="center">{props.author.name}</h2>
            <AuthorNameSurname author={props.author}/>
            <AuthorAddress author={props.author}/>
            <AuthorCompany author={props.author}/>
        </Fragment>
    )
};

export { AboutSingleAuthor }

