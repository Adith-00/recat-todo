import React from "react";
import CompleteTask from "./completetask";

const CompltHold=({task,setTask})=>{
    return(
        <div className="main">
            <div className="disp wrapper">
                <h1>Completed Tasks</h1>
               
                {task.map((item) => (
                     item.stage === true && <CompleteTask taskData={item.text} task={task} setTask={setTask} />
                ))}

               
            </div>
           
        </div>
    )
}
export default CompltHold;