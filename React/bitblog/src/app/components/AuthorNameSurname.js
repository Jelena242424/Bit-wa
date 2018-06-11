import React, { Component, Fragment } from 'react';

const AuthorNameSurname = () => {

    return (

        <div className="col s12 m7">
            <div className="card horizontal">
                <div className="card-image">
                    <img src="http://via.placeholder.com/150x200" />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                    <h3>Name Surname</h3>
                        <p>username: myUserName</p>
                        <p>email: myUserName@omg.com</p>
                        <p>phone: 145-8856-7852</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { AuthorNameSurname }