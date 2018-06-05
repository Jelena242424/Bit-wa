import React from "react"

const SingleUser = (props) => {
    // const { name, email, dob, photoSrc } = props.myUser;
   const name = props.myUser.name;
   const email = props.myUser.hideEmail()
   const dob = props.myUser.formatDate();
   const photoSrc = props.myUser.photoSrc;

    return (
        <p className="collection-item avatar">
            <img src={photoSrc} alt="" className="circle" />
            <span className="title">{name}</span>
            <p><i class="tiny material-icons">email</i>{email}</p>
            <p><i class="tiny material-icons">cake</i>{dob}</p>
        </p>
    )
}

export { SingleUser }