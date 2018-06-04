import React from "react";

const UserCardItem = (props) => {
    const {name, email, dob, photoSrc} = props.myUser;
    return (
        <p className="collection-item avatar">
            <img src={photoSrc} alt = "" className="circle" />
            <span className="title">{name}</span>
            <p>{email}</p>
            <p>{dob}</p>
            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </p>
    )
}

UserCardItem.propTypes ={
    myUser: PropTypes.object.isRequired
}

UserCArdItem.defaultProps = {
    myUser: {}
}

export default UserCardItem;



