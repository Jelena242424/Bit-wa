import React from "react";
import PropTypes from "prop-types";


const PhotoUserCard = (props) => {
    if (!props.myUser) {
        return null;
    }
    const { name, email, dob, photoLarge } = props.myUser;
    const shortEmail = `${email.slice(0, 3)} ... ${email.slice(9)}`
    const dateObj = new Date(dob).toDateString().split(" ");
    const formatDate = `Date of Birth: ${dateObj[1]} ${dateObj[2]}th '${dateObj[3].slice(2)}`
    return (
        <div className="col s4">
            <div className="card">
                <div className="card-image">
                    <img src={photoLarge} alt="" />
                    <span className="card-title">{name}</span>
                </div>
                <div className="card-content">
                    <p>{shortEmail}</p>
                    <p>{formatDate}</p>
                </div>
            </div>
        </div>
    )
}


PhotoUserCard.propTypes = {
    myUser: PropTypes.object
}

PhotoUserCard.defaultProps = {
    myUser: null
}

export { PhotoUserCard };