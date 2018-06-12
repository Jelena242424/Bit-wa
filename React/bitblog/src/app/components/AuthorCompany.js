import React from 'react';

const AuthorCompany = (props) => {

    return (
        <div className="col s12 m7">
            <div className="card horizontal">
                <div className="card-image">
                    <img src="http://via.placeholder.com/150x200" />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                    <h3>Company</h3>
                        <p>name: {props.author.companyName}</p>
                        <p>slogan: {props.author.companySlogan}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export {AuthorCompany}