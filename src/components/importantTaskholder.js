import React from "react";
import Impotant from "./importantTask";

const ImpHold=({task,setTask})=>{
  
    return(
        <div className="main">
            <div className="disp wrapper">
                <h1> Important Tasks</h1>
                
                {task.map((item) => (
                     item.imp === true && <Impotant taskData={item.text} task={task} setTask={setTask} />
                ))}
               
            </div>
           
        </div>
    )
}
export default ImpHold