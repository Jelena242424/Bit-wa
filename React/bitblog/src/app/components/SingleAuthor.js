import React, { Component } from "react"
import Link from "react-router-dom/Link";

const SingleAuthor = (props) => {
    const id = props.author.id;
    const name = props.author.name;
    const userName = props.author.userName;
    const email = props.author.email;
    const phone = props.author.phone;
    const street = props.author.street;
    const city = props.author.city;
    const zipCode = props.author.zipCode;
    const companyName = props.author.companyName;
    const companySlogan = props.author.companySlogan;

    return (
        <div className="row">
            <div className="col s12">
                <div className="card #eeeeee grey lighten-3">
                    <div className="card-content black-text">
                        <span className="card-title"><Link to={`/author/${id}`}> {name} </Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {SingleAuthor}