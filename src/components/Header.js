import React from "react";
import logo from'../assets/images/logo1.png';
const Header =()=>{
    return(
        <header className="headers">
            <h1 className="Logo"><img src={logo} alt="" /></h1>
            <h1>To-Do List</h1>
        </header>
    )
}
export default Header;