import React from "react";
import Button from "./button";

const Impotant=({taskData,task,setTask})=>{

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
                <Button buttonText="Remove from imp" btnfun={()=>removeImp(taskData)}/>
            </div>
            
        </div>
    )
}
export default Impotant