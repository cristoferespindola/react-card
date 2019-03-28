import React from "react";

import "./button.scss"

const Button = (props) => {
    if (props.class === "btn--primary") {
        return (
            <a className="btn btn--primary" href="#">{props.text}</a>
        );
    } else {
        return (
            <a className="btn" href="#">{props.text}</a>
        );
    }
}

export default Button;