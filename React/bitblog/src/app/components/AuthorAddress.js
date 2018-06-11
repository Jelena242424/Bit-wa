import React from 'react';

const AuthorAddress = () => {

    return (
        <div className="col s12 m7">
            <div className="card horizontal">
                <div className="card-image">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.7449771187653!2d20.455167015956487!3d44.806385679098696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa9c08b61e5%3A0x3ee3e8a176a39372!2sNemanjina+4%2C+Beograd!5e0!3m2!1sen!2srs!4v1528711930651" width="150" height="200" frameborder="0" allowfullscreen></iframe>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h3>Address</h3>
                        <p>street: unknown</p>
                        <p>city: Somewhere</p>
                        <p>zip code: 123456</p>
                    </div>
                </div>
            </div>
        </div >
    )
};

export { AuthorAddress }