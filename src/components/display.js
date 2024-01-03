import React from "react";
import Button from "./button";
import Inputfeild from "./input ";
import Taskdisp from "./taskdisp";



const Disp=({task,setTask,data,setData,state,setState,edit,setEdit})=>{
    const editTask=(taskData)=>{
        setState(true)
        setData([taskData]);
        const ind = task.findIndex((item) => item.text === taskData);
        console.log("indexx***",ind)
        setEdit(ind)
    }
    const saveTask=()=>{
        task[edit].text=data
        setState(false)
        setData('')
        setEdit('')
        console.log("kkkkkkk",task)
    }
    return(
        <div className="main">
            <div className="disp wrapper">
                <div className="input">
                    <Inputfeild task={task} setTask={setTask} data={data} setData={setData} state={state} setState={setState} savetask={saveTask}/>
                </div>
                
                 {task?.map((item)=>(
                    <Taskdisp taskData={item.text} items={item.stage} task={task} setTask={setTask}  imp={item.imp} edittask={()=>editTask(item.text)}/>
                 ))} 
                
            </div>
           
        </div>
    )
}
export default Disp;