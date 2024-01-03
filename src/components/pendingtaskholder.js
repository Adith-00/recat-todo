import React from "react";
import PendingTask from "./pendingtask";

const PendingHold=({task,setTask})=>{
  
    return(
        <div className="main">
            <div className="disp wrapper">
                <h1>Pending Tasks</h1>
                
                {task.map((item) => (
                     item.stage === false && <PendingTask taskData={item.text} task={task} setTask={setTask} />
                ))}
               
            </div>
           
        </div>
    )
}
export default PendingHold;