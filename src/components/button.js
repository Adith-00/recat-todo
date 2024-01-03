import React from "react";

const Button =({buttonText,btnfun,btnstyle})=>{
    return(
        <button className={`button ${btnstyle}`} onClick={btnfun}>{buttonText}</button>
    )
    }
   
export default Button;