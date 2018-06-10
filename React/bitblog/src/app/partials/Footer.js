import React from "react";


export const Footer = (props) => {

    return (
        <footer className="page-footer #e65100 orange darken-4">
            <div className="footer-copyright">
                <div className="container">
                    ©  BIT Blog {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    )
}