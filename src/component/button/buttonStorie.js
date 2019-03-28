import React from "react";

import "./button.scss"

 const Button = (props) => {
    const style = {
        backgroundColor: "#d0d0d0",
        height: "120px",
        width: "200px",
        padding: "50px 0 0 50px"
    }    

     if(props.class === "btn--primary"){
         return (
             <div style={ style }>
                 <a className="btn btn--primary" href="#">{props.text}</a>
            </div>        
         );
     } else {
        return (        
            <div style={ style }>
                 <a className="btn" href="#">{props.text}</a>
            </div>       
        );
     }
}

export default Button;