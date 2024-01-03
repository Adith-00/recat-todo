import React from "react";
import Button from "./button";

const CompleteTask=({taskData,task,setTask})=>{
    const undo=(taskData)=>{
        const undoTask =[...task];
        const ind = undoTask.findIndex((item) => item.text === taskData);
        undoTask[ind].stage = false;
        setTask([...undoTask])
        console.log("stage changed array1",undoTask)
        console.log("stage changed array2",ind)
       }
        const deleteTask=(taskData)=>{
          const dltTsk =[...task]
          const ind = dltTsk.findIndex((item) => item.text === taskData);
          dltTsk.splice(ind,1);
          setTask([...dltTsk]);
        }

    return(
        <div className="taskdisp">
            <p>{taskData}</p>
            <div className="btns">
                <Button buttonText="Undo" btnfun={()=>undo(taskData)}/>
                <Button buttonText="Delete" btnfun={()=>deleteTask(taskData)} />
            </div>
            
        </div>
    )
}
export default CompleteTask;