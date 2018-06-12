import React from 'react';

const AuthorAddress = (props) => {

    return (
        <div className="col s12 m7">
            <div className="card horizontal">
                <div className="card-image">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d308532.08932722826!2d-149.51288841771017!3d-17.687220080804323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x769bb353982d1e65%3A0x413cf43a8988a3fa!2sTahiti!5e1!3m2!1sen!2srs!4v1528811565547" width="150" height="200" allowfullscreen></iframe>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h3>Address</h3>
                        <p>street: {props.author.street}</p>
                        <p>city: {props.author.city}</p>
                        <p>zip code: {props.author.zipCode}</p>
                    </div>
                </div>
            </div>
        </div >
    )
};

export { AuthorAddress }