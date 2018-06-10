import React, { Fragment } from 'react';
import { SingleAuthor } from './SingleAuthor';

const AuthorsList = (props) => {

    const renderAuthorsList = () => {
        return props.authors.map(author => {
            return <SingleAuthor author={author} key={author.userId}/>
        });
    };

    return (
        <Fragment>
             <h1 className="center-align">Authors</h1>
            {renderAuthorsList()}
        </Fragment>
    )
}

export {AuthorsList}