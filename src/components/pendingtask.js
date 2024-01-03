import React from "react";
import Button from "./button";

const PendingTask=({taskData,task,setTask})=>{
    const complete=(taskData)=>{
        const compltTask =[...task];
        const ind = compltTask.findIndex((item) => item.text === taskData);
        compltTask[ind].stage = true;
        setTask([...compltTask])
        console.log("stage changed array1",compltTask)
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
                <Button buttonText="Complete" btnfun={()=>complete(taskData)}/>
                <Button buttonText="Delete" btnfun={()=>deleteTask(taskData)} />
            </div>
            
        </div>
    )
}
export default PendingTask;