import React, { Component, Fragment } from 'react';

const AuthorNameSurname = (props) => {

    return (

        <div className="col s12 m7">
            <div className="card horizontal">
                <div className="card-image">
                    <img src="http://via.placeholder.com/150x200" />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                    <h3>{props.author.name}</h3>
                        <p>username: {props.author.name}</p>
                        <p>email: {props.author.email}</p>
                        <p>phone: {props.author.phone}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { AuthorNameSurname }