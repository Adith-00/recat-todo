import React from "react";
import { Link } from "react-router-dom";

const Routers=()=>{
    return(
        <div className="router">
           <Link to="/"><h2  >Task Manager</h2></Link> 
           <Link to="complete"> <h2>Completed Task</h2></Link> 
           <Link to="pending"> <h2>Pending Task</h2></Link> 
           <Link to="important"> <h2>Important Task</h2></Link> 
        </div>
    )
}
export default Routers;