import React from "react"

const SinglePhotoUser = (props) => {
    const name = props.myUser.name;
    const email = props.myUser.hideEmail()
    const dob = props.myUser.formatDate();
    const photoLarge = props.myUser.photoLarge;
    const gender = props.myUser.gender;
   

    return (
        <div className="col s4">
            <div className="card">
                <div className="card-image">
                    <img src={photoLarge} alt="" />
                    <span className="card-title">{name}</span>
                </div>
                <div className={(gender === "female") ? "red lighten-5 card-content": "card-content"}>
                    <p>{email}</p>
                    <p>Birth Date: {dob}</p>
                </div>
            </div>
        </div>
    )
}

export {SinglePhotoUser};