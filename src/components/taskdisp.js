import React from "react";
import Button from "./button";
import { useState } from "react";

const Taskdisp=({taskData,task,setTask,edittask,items,imp})=>{
  
    const complete=(taskData)=>{
    const compltTask =[...task];
    const ind = compltTask.findIndex((item) => item?.text === taskData);
    compltTask[ind].stage = true;
    setTask([...compltTask])
    console.log("stage changed array",compltTask)
    console.log("stage changed array",ind)
   }
    const deleteTask=(taskData)=>{
      const dltTsk =[...task]
      const ind = dltTsk.findIndex((item) => item?.text === taskData);
      dltTsk?.splice(ind,1);
      setTask([...dltTsk]);
    }
    const undo=(taskData)=>{
        const undoTask =[...task];
        const ind = undoTask?.findIndex((item) => item?.text === taskData);
        undoTask[ind].stage = false;
        setTask([...undoTask])
        console.log("stage changed array1",undoTask)
        console.log("stage changed array2",ind)
       }
    const impTask=()=>{
        const impTask =[...task];
        const ind = impTask?.findIndex((item) => item?.text === taskData);
        impTask[ind].imp = true;
        setTask([...impTask])
    }   
    const removeImp=(taskData)=>{
        const Imp =[...task];
        const ind = Imp.findIndex((item) => item.text === taskData);
        Imp[ind].imp = false;
        setTask([...Imp])
       }
    return(
        <div className="taskdisp">
            <p>{taskData}</p>
            <div className="btns">
                {items === true?
                    <Button buttonText="Undo" btnfun={()=>undo(taskData)}/>
                    :
                    <Button buttonText="complete" btnfun={()=>complete(taskData)}/>
                }
                <Button buttonText="Edit" btnfun={edittask}/>
                <Button buttonText="Delete" btnfun={()=>deleteTask(taskData)}/>
                
                {imp === true?
                    <Button buttonText="Remove from imp" btnfun={()=>removeImp(taskData)}/>
                    :
                    <Button buttonText="Mark As Imp"btnfun={()=>impTask(taskData)}/>
                }
            </div>
            
        </div>
    )
}
export default Taskdisp;