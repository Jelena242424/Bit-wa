import React from "react";


export const Footer = (props) => {

    const getMinutes =() => {
        const time = localStorage.getItem("reload") - localStorage.getItem("firstVisit");
        console.log(time);
        const timer = new Date (time);
        const timeDifference = timer.getTime();
        const minutes = 1000 * 60;
        const elapsedTimeInMinutes = Math.round(timeDifference / minutes);
        return elapsedTimeInMinutes; 
    }

    return (
        <footer className="page-footer">

            <div className="footer-copyright">
                <div className="container">
                    ©  BIT People {new Date().getFullYear()}
                    <span className="grey-text text-lighten-4 right">Last update: {getMinutes()} minutes ago</span>
                
                </div>
            </div>
        </footer>
    )
}